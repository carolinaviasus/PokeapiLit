import { css } from "lit";

export default css`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  :host {
      display: block;
      font-family: 'Roboto', sans-serif;
    }
    .listpoke{
      display: block;
    }

    .evolution {
      cursor: pointer;
      margin: 10px;
      padding: 10px;
      border: 10px solid #fbfbfb;
      background-color: #323249;
      border-radius: 5px;
      color:#24AA91;
    }
    .pokemon img, .evolution img {
      max-width: 100px;
      height: auto;
    }
    .evolutions {
      margin-top: 10px;
      text-align: center;
    }
    .evolutions h1{
      font-size: 50px;
    }
    .imagenpokee{
        border-radius: 10% / 10%;
    }
    button {
      padding: 10px 20px;
      background-color: #01A1A1;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      margin: 20px;
      color: #ffffff;
    }
    button:hover {
     background-color: #ffffff;
     color: #01A1A1;
    }
    .imagenpokee img {
      max-width: 86%;
      height:250px;
    }

    .container {
      text-align: center;
      background-color: #D4D4F2;
      margin:20px;
    }

    .card {
      background: #f9f7fc;
      border-radius: 2px;
      display: inline-block;
      height: 220px;
      width: 400px;
      margin: 1rem;
      position: relative;
      text-align: center;
      box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
      transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
      border-radius: 20px;
      cursor: pointer;
    }
    .card:hover{
      box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.24);
    }
    .card img {
      max-width: 86%;
      height:180px;
    }
    .card-content{
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin: 1rem;
    }
    .textpoke {
      display: flex;
      flex-direction: column;
      justify-content: center
    }
    .textpoke h2 {
      margin: 0 0 20px 0;
      font-size: 26px; 
      text-transform: capitalize;
    }

    .textpoke p {
      margin: 5px 0; 
      font-size: 16px; 
    }
   
    .imagenpoke{
        background-color: #F0F0F3;
        border-radius: 30% / 30%;
    }
    .headerpoke{
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 180px;
      background-color: #323249;
      margin:0px 0px 50px 0px;
      font-size: 80px;
      color: #24AA91;
    }
  `;