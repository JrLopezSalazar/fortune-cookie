import './styles/PhraseBox.css'

const PhraseBox = ({ handleChangePhrase, phraseData}) => {
  return (
    <section className='container'>
      <h1 className='phraseBox_h1'>GALLETA DE LA FORTUNA</h1>

        <section className='phraseBox_section'>
            <article className='phraseBox_phrase'>
             <p>{phraseData.phrase} </p>
            </article>

        <button className='phraseBox_btn' onClick={handleChangePhrase}>Ver otro</button>
        </section>

      <footer className='phraseBox_footer'>
        <h4 className='phraseBox_author'>Autor: {phraseData.author} </h4>
      </footer>
    </section>
  );
};

export default PhraseBox;
