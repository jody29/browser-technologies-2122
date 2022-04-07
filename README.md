# 🧑🏻‍🏫👕 Nerdy Tshirt Creator
<img width="1440" alt="Schermafbeelding 2022-04-06 om 13 31 36" src="https://user-images.githubusercontent.com/66092262/161965477-8ef3d615-0799-40a2-8921-a74db0163783.png">

[Live Demo](https://nerdy-shirt.herokuapp.com/)

## Table of contents
* [Installing application]()
* [Wireflow]()
* [Progressive enhancement]()
* [Testing features]()

# ⚙️ Installing application
```bash
git clone https://github.com/jody29/nerdy-tshirt-creator.git
cd nerdy-tshirt-creator
code .
npm install
npm start
```

# 📄 Wireflow
![wireflow2-10](https://user-images.githubusercontent.com/66092262/162253904-d7238847-9008-4b89-8e46-7366810ac7bf.png)

# 🍰 Progressive enhancement

## 👍🏻 Core functionality
The core functionality is that the user can customize his own t-shirt, put it in the shopping cart and order it.

### What I had to do
To make sure that the core functionality works no matter what, I had to use as much HTML as I can. Also I had to validate the forms server-side, so it will still work when JavaScript is turned off.

I created a POST request that reads the JSON file and checks if there is allready a shirt existing with the same ID.
<img width="1000" alt="Schermafbeelding 2022-04-07 om 17 42 52" src="https://user-images.githubusercontent.com/66092262/162239931-eb3d3b87-71ca-4665-bf33-0279f7701a82.png">

If the there isn't any shirt with the same ID, then it will push the body of the form to the array in the JSON file. This will look like this in the JSON file.
<img width="1207" alt="Schermafbeelding 2022-04-07 om 17 46 25" src="https://user-images.githubusercontent.com/66092262/162241772-3cc938c3-d28f-4fac-9859-94deb4aaa050.png">

## 👌🏻 Usable layer
For the usable layer I added some styling to to my web page. I made sure that the labels had a :focus so that people who have no trackpad or mouse will still be able to use my application. </br>
<img width="286" alt="Schermafbeelding 2022-04-07 om 17 48 26" src="https://user-images.githubusercontent.com/66092262/162242929-6904650a-b720-43fa-8627-e0d18c4555cb.png">

Because some browser don't fully support flexbox, I had to make sure that something else would happen if flexbox is not supported.
<img width="900" alt="Schermafbeelding 2022-04-07 om 17 50 08" src="https://user-images.githubusercontent.com/66092262/162243779-f3663e2f-d08b-4ad1-a868-d96aae4314a7.png">

## 🤤 Pleasurable layer
For the pleasurable layer I added a live preview of the shirt that the user creates. I also made sure that every change that the user makes will be stored in the LocalStorage. So when the user leaves the page and then comes back, he will be able to continue were he left off.
<img width="851" alt="Schermafbeelding 2022-04-07 om 17 52 10" src="https://user-images.githubusercontent.com/66092262/162245031-a8cdc74b-419f-4a95-a42e-aaf501d77252.png">

# 🕵🏻‍♂️ Testing features

## Features
* customize shirt and add to cart.
* editing a shirt that has ben added to the cart.
* continue customizing when returning to the page.
* live preview of the shirt when user customizes it.

## Test scenarios
* Everything is enabled
* JavaScript and css are disabled

## Chosen browsers
* Chrome 99 on MacOS Big Sur 11.6
* Safari 14 on MacOS Big Sur 11.6
* Safari 14 on Iphone with IOS 15.3.1
* Chrome 75 on Nexus 5 with Android 6

## Key conclusions
* Core functionality will always work.
* Flexbox is not fully supported on the Nexus 5. So had to use a @supports in CSS.
* When using safari, user has to set the tab function on in his preferences. This improves the accesibility if it's turned on.
* Pleasurable layer is available in every browser. But when Javascript and CSS are disabled, they're no longer available.

## Customize shirt and add to cart

### Chrome Desktop
#### Everything enabled
![chrome_1-02](https://user-images.githubusercontent.com/66092262/162164315-438a35a1-2f12-4e32-97ff-475de4921f9c.png)
* Everything works fine and the user can easily customize his t-shirt
* User can navigate through the form with tab keys
* User can add the t-shirt to his shopping cart with no problems
#### Javascript and CSS disabled
![chrome2-02](https://user-images.githubusercontent.com/66092262/162168429-d790edb3-d05e-4cc2-b1de-b78ec6a21a17.png)
* When styling is gone, the user can still use the application
* User can still navigate through the form with tab keys
* User can add the t-shirt to his shopping cart with no problems

### Safari Desktop
#### Everything enabled
![Safari_Desk_1-02](https://user-images.githubusercontent.com/66092262/162169845-3ce0cad1-38d5-471b-946f-20e97c553619.png)
* Everything works fine and the user can easily customize his t-shirt
* User can navigate through the form with tab keys (if he has this enabled via his preferences)
* User can add the t-shirt to his shopping cart with no problems
#### Javascript and CSS disabled
![Safari_Desk_2-02](https://user-images.githubusercontent.com/66092262/162171109-30fba5fc-250f-40d4-b923-29a87d525b9b.png)
* When styling is gone, the user can still use the application
* User can still navigate through the form with tab keys (if he has this enabled via his preferences)
* User can add the t-shirt to his shopping cart with no problems

### Safari Iphone
#### Everything enabled
![Safari_Mob_1-02](https://user-images.githubusercontent.com/66092262/162174747-e7193864-fbd3-42bc-997c-d6f5027847ab.png)
* Everything works fine and the user can easily customize his t-shirt
* User can add the t-shirt to his shopping cart
#### Javascript and CSS disabled
![Safari_Mob_2-02](https://user-images.githubusercontent.com/66092262/162176919-17cef17a-3706-464f-9deb-90da33b90647.png)
* Styling is gone and javascript are gone, but everything still works
* User can add the t-shirt to his shopping cart with no problems

### Nexus 5
#### Everything enabled
![Nexus_1 1-02](https://user-images.githubusercontent.com/66092262/162194044-4310c7ba-fa0d-4d71-b2e6-d146e6d70cb7.png)
* flexbox isn't fully supported, but core funcionallity is still working
#### Javascript and CSS disabled
![Nexus_1 2-03](https://user-images.githubusercontent.com/66092262/162194964-4e17a984-b691-494a-a62f-ae8b78cfa257.png)
* User is still able to add a shirt to his shopping cart

## Editing a shirt that has been added to the cart

### Chrome desktop
#### Everything enabled
![Chrome_2 1-02](https://user-images.githubusercontent.com/66092262/162200476-9df903e5-ed6b-48d9-9f89-91b4fe9cb00a.png)
* Everything is working and the user can edit a shirt
#### Javascript and CSS disabled
![Chrome_2 2-02](https://user-images.githubusercontent.com/66092262/162201513-b63ff1f2-6699-4b01-8881-5683aa98381d.png)
* Because I gave the shirt a unique ID via the server, the user can still edit a shirt. If i would have stored in the localStorage, this wouldn't be possible

### Safari desktop
#### Everything enabled
![Safari_Desk_2 1-02](https://user-images.githubusercontent.com/66092262/162215365-7e77a675-7b9b-4602-91d9-ce1947f90107.png)
* Everything is working and the user can edit a shirt
* 
#### Javascript and CSS disabled
![Safari_Desk_2 2-02](https://user-images.githubusercontent.com/66092262/162216334-cb3c4a9a-900a-4018-b4f0-a9706aef092e.png)
* Because I gave the shirt a unique ID via the server, the user can still edit a shirt. If i would have stored in the localStorage, this wouldn't be possible

### Safari Iphone
#### Everything enabled
![Safari_Mob_2 1-02](https://user-images.githubusercontent.com/66092262/162233555-adf72cc1-3ee3-4efc-bfa0-83260dc03067.png)
* Everything is working and the user can edit a shirt
#### Javascript and CSS disabled
![Safari_Mob_2 2-03](https://user-images.githubusercontent.com/66092262/162233561-e1e0fb91-bae5-4e93-a0d1-05b18bbed5d8.png)
* Because I gave the shirt a unique ID via the server, the user can still edit a shirt. If i would have stored in the localStorage, this wouldn't be possible

### Nexus 5
#### Everything enabled
![Nexus_2 1-04](https://user-images.githubusercontent.com/66092262/162197412-6694e2ec-3fc4-4952-a783-c060f4349c8c.png)
* flex isn't fully supported but user is still able to edit a shirt.
### Javascript and CSS disabled
![Nexus_2 2-05](https://user-images.githubusercontent.com/66092262/162197975-de5fd1aa-2a70-4046-8698-e5fcecf20ff6.png)
* Because I gave the shirt a unique ID via the server, the user can still edit a shirt. If i would have stored in the localStorage, this wouldn't be possible

## Continue customizing when returning to the page

### Chrome desktop
#### Everything enabled
![Chrome_3 1-02](https://user-images.githubusercontent.com/66092262/162221572-65daffb2-3089-4ac1-9ce9-cf4a62c72cac.png)
* When leaving the page and returning, the user can continue where it left off.
* Progress is stored in the LocalStorage
#### Javascript and CSS disabled
![Chrome_3 2-02](https://user-images.githubusercontent.com/66092262/162222254-b1639017-6ad0-4c87-96e8-bacc9fd8ca7a.png)
* Because I used the LocalStorage, the user won't be able to continue where it left off if they come back to the page.

### Safari desktop
#### Everything enabled
![Safari_Desk_3 1-02](https://user-images.githubusercontent.com/66092262/162225404-4eace3b3-79a0-437f-9e2a-206350786bbe.png)
* When leaving the page and returning, the user can continue where it left off.
* Progress is stored in the LocalStorage
#### Javascript and CSS disabled
![Safari_Desk_3 2-02](https://user-images.githubusercontent.com/66092262/162225931-058e3b01-0b5d-4800-8462-6dbc3c5c91ff.png)

### Safari Iphone
#### Everything enabled
![Safari_Mob_3 1-04](https://user-images.githubusercontent.com/66092262/162233563-7503ecff-76e5-4f93-a035-30c05759df6c.png)
* When leaving the page and returning, the user can continue where it left off.
* Progress is stored in the LocalStorage
#### Javascript and CSS disabled
![Safari_Mob_3 2-05](https://user-images.githubusercontent.com/66092262/162233567-378e6973-4694-4935-b64c-d5198f04b286.png)
* Because I used the LocalStorage, the user won't be able to continue where it left off if they come back to the page.

### Nexus 5
#### Everything enabled
![Nexus_3 1-06](https://user-images.githubusercontent.com/66092262/162198197-ec4dfc4d-9a38-49d1-bfa2-ffd02a7b1d90.png)
* When leaving the page and returning, the user can continue where it left off.
* Progress is stored in the LocalStorage
#### Javascript and CSS disabled
![Nexus_3 2-07](https://user-images.githubusercontent.com/66092262/162198253-dfb6ed15-fd59-4d1a-93b7-73318f8aa970.png)
* Because I used the LocalStorage, the user won't be able to continue where it left off if they come back to the page.

## Live preview of the shirt when user customizes it

### Chrome desktop
#### Everything enabled
![Chrome_4 1-02](https://user-images.githubusercontent.com/66092262/162223304-a19dd130-881d-4f8c-8038-a88e796bef5d.png)
* User gets a live preview of the shirt that it is creating
#### Javascript and CSS disabled
![Chrome_4 2-02](https://user-images.githubusercontent.com/66092262/162223943-1aee3cbb-4fb5-4c73-abdb-13c9dd1fd9fd.png)
* User no longer gets a live preview of the shirt that it is creating. But it still sees which color he has picked because the chosen label will have a different color. It can also see in the input which text it has filled in

### Safari desktop
#### Everything enabled
![Safari_Desk_4 1-02](https://user-images.githubusercontent.com/66092262/162227998-2fa10618-fa04-473a-953f-44d4a155d54b.png)
* User gets a live preview of the shirt that it is creating
#### Javascript and CSS disabled
![Safari_Desk_4 2-02](https://user-images.githubusercontent.com/66092262/162227433-b34295e0-7602-4609-8361-287147c79656.png)
* User no longer gets a live preview of the shirt that it is creating. But it still sees which color he has picked because the chosen label will have a different color. It can also see in the input which text it has filled in

### Safari Iphone
#### Everything enabled
![Safari_Mob_4 1-06](https://user-images.githubusercontent.com/66092262/162233570-0b206b82-c7f6-48c6-8169-e77a1e3b5958.png)
* User gets a live preview of the shirt that it is creating
#### Javascript and CSS disabled
![Safari_Mob_4 2-07](https://user-images.githubusercontent.com/66092262/162233571-79b70681-7e3c-46b8-828c-e24aeacd871d.png)
* User no longer gets a live preview of the shirt that it is creating. But it still sees which color he has picked because the chosen label will have a different color. It can also see in the input which text it has filled in

### Nexus 5
#### Everything enabled
![Nexus_4 1-08](https://user-images.githubusercontent.com/66092262/162198514-5694c237-be87-4bbd-970e-b9f8212c39dc.png)
* User gets a live preview of the shirt that it is creating
#### Javascript and CSS disabled
![Nexus_4 2-09](https://user-images.githubusercontent.com/66092262/162198606-5c1db35d-d2f0-4fd0-9f5d-7ccb127f7511.png)
* User no longer gets a live preview of the shirt that it is creating. But it still sees which color he has picked because the chosen label will have a different color. It can also see in the input which text it has filled in

