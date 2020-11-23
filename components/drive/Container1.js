import styles from './Container1.module.css'
import descriptions from '../../assets/drive-descriptions.json'
import EmailNewsletter from '../EmailNewsletter'
import Image from 'next/image'

const Container1 = ({ id }) => {

    const description = descriptions.filter( desc => desc.id === id)
    
    // Check if a number is odd
    const isOdd = ( num ) => {
        return num % 2 == 1;
    }

    // Set the background color of the container depending on its id
    const className = isOdd(id) ? 'normal_container' : 'normal_container grey'

    return ( 
        <div className={className}>
            <div className={`${styles.main}`}>
                <h1 className={`${styles.title} lg:text-8xl`}>
                    {description[0].title}
                </h1>

                <p className={`${styles.subtitle} lg:text-xl lg:w-7/12`}>
                    {description[0].subtitle}
                </p>

                <div className={`${styles.star} lg:pl-24`}>
                    <Image src="/images/1440/Drive/Section 1/star icon.png" width={47} height={50} />
                </div>

                <div className={`${styles.gear} lg:pt-8 lg:pr-22`}>
                    <Image src="/images/1440/Drive/Section 1/cog icon.png" width={37} height={38} />
                </div>

                <div className={`${styles.coin} lg:pb-20`}>
                    <Image src="/images/1440/Drive/Section 1/coin icon.png" width={81} height={76} />
                </div>

                <div className={`${styles.lock} lg:pr-32`}>
                    <Image src="/images/1440/Drive/Section 1/lock icon.png" width={45} height={60} />
                </div>
            </div>

            <div className={`${styles.secondary} lg:pb-32`}>
                <h1 className={`${styles.subtitle2} lg:text-xl`}>
                    {description[0].subtitle2}
                </h1>

                <EmailNewsletter value="Sign up" />

                <p className={`${styles.subtitle3} lg:text-sm`}>
                    {description[0].subtitle3}
                </p>

                <div className={`${styles.cloud} lg:pl-48`}>
                    <Image src="/images/1440/Drive/Section 1/cloud icon.png" width={70} height={52} />
                </div>

                <div className={`${styles.hand} lg:w-84`}>
                    <Image src="/images/1440/Drive/Section 1/purplehand.png" width={482} height={310} />
                </div>
            </div>
        </div>
    );
}
 
export default Container1;