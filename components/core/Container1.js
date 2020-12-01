import styles from './Container1.module.css'
import descriptions from '../../assets/lang/en/core-descriptions.json'
import Image from 'next/image'
import { Button } from 'react-bootstrap'

const Container1 = ({ id, downloadUrl }) => {

    const description = descriptions.filter(desc => desc.id === id)
    
    // Check if a number is odd
    const isOdd = (num) => {
        return num % 2 == 1;
    }

    // Set the background color of the container depending on its id
    const className = isOdd(id) ? 'normal_container' : 'normal_container grey'

    // Esta funcion cambiara el color de una determinada palabra de texto
    const formattedText = (text, values) => { 
        const regex = new RegExp(/\[\[(.*?)\]\]/);

        if (!values.length)
            return text;
    
        return (<div>
            {text.split(regex)
                .reduce((prev, current, i) => {
                    if (!i)
                        return [current];
    
                    return prev.concat(
                        values.includes(current)  ?
                            <span key={i + current} className={`${styles.colored}`}>
                                {current}
                            </span>
                            : current
                    );
                }, [])}
        </div>);
    };

    return (
        <div className={`${className} relative`}>
            <div className={styles.main}>
                <div className={`${styles.left} sm:w-40`}>
                    <Image src="/images/1440/Core/Section 1/Graphic left.png" width={511} height={268} />
                </div>

                <div className={`${styles.right} sm:w-32`}>
                    <Image src="/images/1440/Core/Section 1/Graphic right.png" width={438} height={239} />
                </div>

                <h1 className={`${styles.title} sm:text-4xl sm:w-80`}>
                    {formattedText(description[0].title, description[0].colored)}
                </h1>

                <p className={`${styles.subtitle} sm:text-xl sm:w-10/12 sm:mt-6`}>
                    {description[0].subtitle}
                </p>

                <p className={`${styles.subtitle2} sm:text-xl sm:w-6/12 sm:mt-16`}>
                    {description[0].subtitle2}
                </p>

                <div className={`${styles.button_container}`}>
                    <a href={downloadUrl} className={`${styles.button_core} sm:text-base`}>Download</a>
                    <a href="https://medium.com/internxt/learn-how-to-correctly-set-up-x-core-its-quick-easy-4e738042a8a3" target="_blank"
                        className={`${styles.link} sm:text-base`}>Set-up & tips</a>
                </div>
            </div>
        </div>
    );
}

export default Container1;