# chatUi-pwa
## There are two ways to test/check this project
1. You can go to live version of this project by clicking this [link](https://chat-ui-pwa.vercel.app/).<br>
Or just paste this url in your search bar "https://chat-ui-pwa.vercel.app/"<br><br>

*Note: Since the application is fetching data from an http resource ("http://3.111.128.67/assignment/chat?page=0") instead of an https, 
so you won't be able to see the fetched data until you change site settings.*<br><br>
After opening the application in your browser<br><br> 
**For Desktop**<br><br>
To change site settings click on the 🔒 icon in your search bar and go to **Site settings** and select Allow for **Insecure Content**.<br>
Relaod the application and it will now show you the data.<br><br>
**For Mobile Phone**<br><br>
To make the application working in your browser paste this ```"chrome://flags/#unsafely-treat-insecure-origin-as-secure"``` 
in search bar and hit enter. On this page search for secure and enable these two settings:<br>
[i] **Insecure origins treated as secure** and add "http://3.111.128.67/assignment/chat?page=0" in the input box and enable it.<br>
[ii] **Allow invalid certificates for resources loaded from localhost** and enable it and Relaunch it.<br>
Now you can also install the application as an android app or a desktop app because it is a PWA.<br><br><br>
*Note: Disable these settings after you have tested the application*


2. The other way to run the application is to rrun it locally on your system, you need to follow these steps:<br><br>
[i] Install [NodeJs](https://nodejs.org/en/download)<br>
[ii] Open the terminal and **Clone** this repository by running:
```git clone git@github.com:gaurav-2-0-0-2/chatUi-pwa.git```<br>
[iii] After cloning go to the project folder and run:
`npm install`<br>
[iv] Now for running the project locally run:
`npm run dev`<br>
[v] As I have used vite.js so the project will be running on
`http://localhost:5173`<br>








