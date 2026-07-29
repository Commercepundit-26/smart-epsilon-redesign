jQuery(function($){
    let selectedSolutions = '';
    let selectedIndustries = '';
    let selectedPlatform = '';

    // Click event handlers
    $(document).on('click', '.selectbox li', function(){
        selectedSolutions = this.id;
        sendCombinedFilters();
        return false;
    });
    $(document).on('click', '.selectbox-second li', function(){
        selectedIndustries = this.id;
        sendCombinedFilters();
        return false;
    });
    $(document).on('click', '.selectbox-third li', function(){
        selectedPlatform = this.id;
        sendCombinedFilters();
        return false;
    });

    function sendCombinedFilters() {
        $.ajax({
            url: filter_loadmore_params.ajaxurl,
            type: 'POST',
            dataType: 'json',
            data: {
                action: 'customfilter',
                solutionsfilter: selectedSolutions,
                industriesfilter: selectedIndustries,
                platformfilter: selectedPlatform
            },
            success: function(data) {
                if (!data.content) {
                    $('#filter_posts_wrap').html('<p>Data not Found</p>');
                } else {
                    $('#filter_posts_wrap').html(data.content);
                }
                $('.without-filter').hide();
            },
            error: function() {
                $('#filter_posts_wrap').html('<p>Error loading results.</p>');
            }
        });
    }

    // Get URL param and trigger filter
    function getUrlParam(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    const caseStudy = getUrlParam('case_study');
    if (caseStudy) {
        if ($('#industriesfilter option[value="' + caseStudy + '"]').length > 0) {
            $('#industriesfilter').val(caseStudy);
            selectedIndustries = caseStudy;
        }
        if ($('#technologyfilter option[value="' + caseStudy + '"]').length > 0) {
            $('#technologyfilter').val(caseStudy);
            selectedSolutions = caseStudy;
        }
        if ($('#platformfilter option[value="' + caseStudy + '"]').length > 0) {
            $('#platformfilter').val(caseStudy);
            selectedPlatform = caseStudy;
        }

        // Trigger filter after setting from URL
        $('#filter_posts_wrap').html('<p>Loading...</p>');
        sendCombinedFilters();
    }
});