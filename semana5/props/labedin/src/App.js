import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://i.imgur.com/FQ8CnJv.png" 
          nome="Manoel Neto" 
          descricao="Oi, eu sou o Manoel. Sou o Engenheiro Civil pela PUC-GO, Desenvolver de Software pela NCI e estudade Web Full Stack na Labenu. Adoro o universo geek pop, especialmente envolvendo Funkos, gosto de ouvir músicas e ler livros para me relaxar, e interesse em tudo ligado a tecnologia."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem="https://cdn4.iconfinder.com/data/icons/aiga-symbol-signs/439/aiga_mail-512.png"
          descricao="Email: mneto_004@hotmail.com" 
          />

          <CardPequeno
          imagem="https://image.flaticon.com/icons/svg/1239/1239525.svg"
          descricao="Endereço: Rua Pau Brasil, 435" 
          />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://image.winudf.com/v2/image/YnIuY29tLnJnaXNtb2JpbGUucmdpc19zY3JlZW5zaG90c18xXzY4NzBjNjY3/screen-1.jpg?fakeurl=1&type=.jpg" 
          nome="RGIS" 
          descricao="Contando estoque para grandes lojas de diversos mercados, conversando muito com os colegas." 
        />
        
        <CardGrande 
          imagem="https://lh3.googleusercontent.com/vCA_ZFU5iVY-Amzc71O5v8tJL2u1jlTlNVJVODebYspsK1YWBoru4zhieIcxoGvUN9re" 
          nome="SANEAGO" 
          descricao="Estagiário de Engenharia Civil, no qual mais aprendi a mexer em softwares inutes do que algo na area" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
