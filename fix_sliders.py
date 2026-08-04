import glob
import os
from bs4 import BeautifulSoup

def process_file(filepath, mapping_list, img_prefix):
    with open(filepath, 'r', encoding='utf-8') as f:
        html = f.read()
    
    soup = BeautifulSoup(html, 'html.parser')
    
    carousels = soup.find_all('div', class_='agro-carousel')
    if not carousels:
        print(f"No agro-carousel found in {filepath}")
        return
        
    # the correct carousel is the one that contains agro-bento-item
    carousel = None
    for c in carousels:
        if c.find('div', class_='agro-bento-item'):
            carousel = c
            break
            
    if not carousel:
        print(f"No bento carousel found in {filepath}")
        return
        
    items = carousel.find_all('div', class_='agro-bento-item')
    
    for i, item in enumerate(items):
        if i >= len(mapping_list):
            break
            
        # Clean item styles
        if 'style' in item.attrs:
            del item['style']
            
        # Remove the icon div
        icon_div = item.find('div', style=lambda v: v and 'width: 48px' in v)
        if icon_div:
            icon_div.decompose()
            
        # Add the image
        img_name = mapping_list[i]
        
        # We need to find the correct generated filename, since they have timestamps
        matches = glob.glob(f"assets/images/{img_name}_*.jpg")
        img_src = matches[0] if matches else f"assets/images/{img_name}.jpg"
        
        img_tag = soup.new_tag('img', attrs={
            'class': 'agro-bento-img',
            'src': img_src,
            'alt': ''
        })
        
        # check if it already has the image to prevent duplicates
        if not item.find('img', class_='agro-bento-img'):
            item.insert(0, img_tag)
        
        # Clean up the content <p> styles
        content = item.find('div', class_='agro-bento-content')
        if content:
            if 'style' in content.attrs:
                del content['style']
            p = content.find('p')
            if p and 'style' in p.attrs:
                del p['style']
                
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(str(soup))
    print(f"Updated {filepath}")

og_mapping = [
    'og_sol_1', 'og_sol_2', 'og_sol_3', 'og_3', 'og_5', 
    'og_4', 'og_1', 'og_7', 'og_2', 'og_6', 'og_8'
]

ea_mapping = [
    'ea_sol_1', 'ea_sol_2', 'ea_sol_3', 'ea_sol_4', 'ea_1',
    'ea_4', 'ea_8', 'ea_3', 'ea_5', 'ea_7', 'ea_6', 'ea_2'
]

process_file('industry-oil-and-gas.html', og_mapping, 'og')
process_file('industry-electrical-appliances-and-parts.html', ea_mapping, 'ea')
