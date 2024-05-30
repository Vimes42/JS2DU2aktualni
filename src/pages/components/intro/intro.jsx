    
export const Intro = (props) => {
    return (
        <div className="intro">
            <h2>{props.heading}</h2>
            <p>
                {props.text}
            </p>
        </div>
    )
}
    


export const IntroProps = {
    heading: 'Vítejte mezi Jogíny',
    text: `Naše lekce jsou zaměřeny na potřeby klientů, kteří mají odvahu zkusit
           něco nového. Cvičíme v pomalém tempu s podrobným slovním doprovodem.
           Postupně se seznámíte se základními principy jógy, jak přístupovat k
           sobě i ostatním. Krok za krokem objevíte a dostanete pod kontrolu
           svoje tělo, pocity a emoce.`,
  }