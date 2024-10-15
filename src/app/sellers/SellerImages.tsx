import Person1 from '/src/public/images/Person1.webp'
import Person2 from '/src/public/images/Person2.webp'
import Person3 from '/src/public/images/Person3.webp'
import Person4 from '/src/public/images/Person4.webp'

import Image from "next/image"
export default function SellersImage() {
    return (
    <>
    <div className='flex justify-center space-x-8 my-5'>
            <div>
                <Image
                    src={Person1} 
                    alt="Image of person1" 
                    height={240}
                    />
            </div>
            <div>
                <Image
                    src={Person2} 
                    alt="Image of person2"
                    width={240}
                    height={240}
                    />
            </div>
            <div>
                <Image
                src={Person3}
                alt="Image of person3"
                height={240}
                />
            </div>
            <div>
                <Image
                src={Person4}
                alt="Image of person4"
                
                height={240}
                />
            </div>
            {/* <Images /> */}
        </div>
    </>)
        
}