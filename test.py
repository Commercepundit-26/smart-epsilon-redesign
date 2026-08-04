from bs4 import BeautifulSoup
with open('industry-oil-and-gas.html', 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')
carousels = soup.find_all('div', class_='agro-carousel')
print("carousels[0] id:", carousels[0].get('id'))
print("carousels[0] string:", str(carousels[0])[:100])
