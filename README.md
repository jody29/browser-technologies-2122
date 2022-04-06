# Nerdy Tshirt Creator
<img width="1440" alt="Schermafbeelding 2022-04-06 om 13 31 36" src="https://user-images.githubusercontent.com/66092262/161965477-8ef3d615-0799-40a2-8921-a74db0163783.png">

[Live Demo](https://nerdy-shirt.herokuapp.com/)

## Table of contents
* [Wireflow]()
* [Features]()
* [Browser testing]()

## Wireflow
![wireflow](https://user-images.githubusercontent.com/66092262/161967779-ef70a805-ee89-4694-9262-4daf2db7bad9.png)

### Core funcionality
The core functionality is that the user can customize his own t-shirt, put it in the shopping cart and order it.

### Usable layer
For the usable layer I added some styling to to my web page. I made sure that the labels had a :focus so that people who have no trackapad or mouse will still be able to use my application

### Pleasurable layer
For the pleasurable layer I added a live preview of the shirt that the user creates. I also made sure that every change that the user makes will be stored in the LocalStorage. So when the user leaves the page and then comes back, he will be able to continue were he left off.

## Features
* customize shirt and add to cart
* editing a shirt that has ben added to the cart
* continue customizing when returning to the page
* live preview when customizing the t-shirt

## Browser testing
<details>
  <summary>Chrome desktop</summary>
  <ul>
    <li>Turning off javascript: user is still able to send customize a shirt but won't have a live preview. The user also won't be able to continue the form where the user left off. When the user added the product to the cart, the user will still be able to edit the shirt afterwards.</li>
    <li>No mouse/trackpad: user can navigate with tab. :focus state works for input and labels. Labels also have a :checked state. This means that the user is still able to use the application when mouse/trackpad is not available.</li>
  </ul>
</details>
<details>
  <summary>Safari desktop</summary>
  <ul>
    <li>Turning off javascript: user is still able to send customize a shirt but won't have a live preview. The user also won't be able to continue the form where the user left off. When the user added the product to the cart, the user will still be able to edit the shirt afterwards.</li>
    <li>No mouse/trackpad: safari doesn't have tab as a default preference. This means that the user has to change some preferences to still be able to use the application when there is no mouse/trackpad available.</li>
  </ul>
</details>
