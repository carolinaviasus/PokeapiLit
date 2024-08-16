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
        border: 1px solid #ddd;
        border-radius: 5px;
        text-align: center;
      }
      .pokemon img, .evolution img {
        max-width: 100px;
        height: auto;
      }
      .evolutions {
        margin-top: 10px;
      }
      button {
        margin-bottom: 20px;
      }

    .container {
      text-align: center;
      background-color: #D4D4F2;
      margin:20px;
    }

    .noresult  {
      font-size: 46px; 
      color: #323249;
      font-weight: bold;
      align-content: center;
      justify-content: center;
      padding: 20%;
    }
    get-data{
      display: none;
    }

    .card {
      background: #f9f7fc;
      border-radius: 2px;
      display: inline-block;
      height: 311px;
      width: 400px;
      margin: 1rem;
      position: relative;
      text-align: center;
      box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
      transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
      border-radius: 20px;
    }
    .card:hover{
      box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.24);
    }
    .card img {
      max-width: 80%;
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
     margin: 0 0 20px 0; /* Espacio debajo del encabezado */
      font-size: 26px; 
      text-transform: capitalize;
    }

    .textpoke p {
      margin: 5px 0; /* Espacio entre los pÃ¡rrafos */
      font-size: 16px; 
    }
   
    .imagenpoke{
        background-color: #F0F0F3; /* Color lila */
        border-radius: 30% / 30%; /* Forma de Ã³valo */
    }
  `;