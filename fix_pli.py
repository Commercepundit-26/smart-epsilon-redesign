from bs4 import BeautifulSoup

with open('solution-payment-linked-incentives.html', 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

section = soup.find(id='qa-cards')
if section:
    slider = section.find('div', class_='bento-slider')
    if slider:
        track = slider.find('div', class_='bento-slider-track')
        if track:
            grid = soup.new_tag('div', attrs={'class': 'integration-grid'})
            for card in track.find_all('div', class_='int-card'):
                if 'style' in card.attrs:
                    del card['style']
                grid.append(card)
            slider.replace_with(grid)
            
            with open('solution-payment-linked-incentives.html', 'w', encoding='utf-8') as f:
                f.write(str(soup))
            print("Fixed PLI")
        else:
            print("No track")
    else:
        # maybe it's not wrapped in bento-slider?
        # let's check what it is
        pass
