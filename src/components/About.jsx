import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion';
import Cart from './Cart';
import { useStateValue } from '../context/StateProvider';

const About = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [{storeCollections, cartShow}, dispatch] = useStateValue()

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
  return (
    <motion.section  
    initial={{width: 0}}
    animate={{width: "100%"}}
    exit={{x: window.innerWidth, transition: {duration: 0.2}}}
    >
        {width > 600 ? <div className="w-full">
        <div  className='w-full lg:w-[880]'>
            <img className="rounded-md drop-shadow lg:w-full lg:h-320 mt-5 object-contain" src="https://images.unsplash.com/photo-1593450298063-4e08a162a437?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHlvZ3VydHxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60" alt="Sweet Yoghurt"/>
        </div>
       <h2 className='text-2xl font-bold text-headingColor text-center mt-5
            relative before:absolute before:rounded-lg before:content
            before:w-16 before:h-1 before:-bottom-2 before:right-18 
            before:bg-gradient-to-tr from-green-300 to-green-600 
            transition-all ease-in-out duration-100 mr-auto'
        >
            About Us
        </h2>
        <p className='text-textColor text-left mt-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, fugiat accusamus. 
            Sint dolorem asperiores necessitatibus est harum aliquam hic nobis incidunt laudantium, ullam, 
            eos nesciunt repellendus! Obcaecati placeat perferendis minima velit itaque laborum. 
            Nihil ad maxime labore quod ullam earum quo reiciendis. Quaerat alias, 
            minus odit perspiciatis quisquam nihil veritatis quos illum eveniet, 
            impedit qui fugiat sint consequatur, non praesentium vel obcaecati. 
            Aperiam voluptate quos eius atque aspernatur nam, iste, quod nobis, 
            maiores sit reiciendis. 
            Eaque distinctio adipisci consequuntur eius voluptatum aliquam quibusdam odit corporis, 
            dolor deserunt consectetur assumenda. Quibusdam ratione dolores dolorem, 
            consectetur eaque qui saepe laudantium nobis nesciunt provident reiciendis doloribus maiores. 
            Quae dicta accusamus rerum quis similique nesciunt excepturi impedit reprehenderit quos, ea voluptas voluptatibus magnam tempora. 
            Vero cum repudiandae, tempore illum repellat perferendis corrupti libero expedita temporibus tenetur odio animi corporis doloribus! 
            Aspernatur consectetur nesciunt optio laborum blanditiis temporibus culpa eaque cupiditate nam ipsum odio, porro voluptatum perspiciatis 
            adipisci eveniet dolor quae iste corporis aut quaerat architecto maiores non! Eveniet voluptate suscipit deserunt, 
            quia placeat in laboriosam voluptatem at numquam aspernatur!
        </p>
    </div> :
    <div className="w-full">
        <div  className='w-full lg:w-[880]'>
            <img className="rounded-md drop-shadow lg:w-656 lg:h-420" src="https://images.unsplash.com/photo-1559894204-ac18b01b7b50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8eW9ndXJ0fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="Sweet Yoghurt"/>
        </div>
       <h2 className='text-2xl font-bold text-headingColor text-center mt-5
            relative before:absolute before:rounded-lg before:content
            before:w-16 before:h-1 before:-bottom-2 before:right-18 
            before:bg-gradient-to-tr from-green-300 to-green-600 
            transition-all ease-in-out duration-100 mr-auto'
        >
            About Us
        </h2>
        <p className='text-textColor text-center mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, fugiat accusamus. 
            Sint dolorem asperiores necessitatibus est harum aliquam hic nobis incidunt laudantium, ullam, 
            eos nesciunt repellendus! Obcaecati placeat perferendis minima velit itaque laborum. 
            Nihil ad maxime labore quod ullam earum quo reiciendis. Quaerat alias, 
            minus odit perspiciatis quisquam nihil veritatis quos illum eveniet, 
            impedit qui fugiat sint consequatur, non praesentium vel obcaecati. 
            Aperiam voluptate quos eius atque aspernatur nam, iste, quod nobis, 
            maiores sit reiciendis. 
            Eaque distinctio adipisci consequuntur eius voluptatum aliquam quibusdam odit corporis, 
            dolor deserunt consectetur assumenda. Quibusdam ratione dolores dolorem, 
            consectetur eaque qui saepe laudantium nobis nesciunt provident reiciendis doloribus maiores. 
            Quae dicta accusamus rerum quis similique nesciunt excepturi impedit reprehenderit quos, ea voluptas voluptatibus magnam tempora. 
            Vero cum repudiandae, tempore illum repellat perferendis corrupti libero expedita temporibus tenetur odio animi corporis doloribus! 
            Aspernatur consectetur nesciunt optio laborum blanditiis temporibus culpa eaque cupiditate nam ipsum odio, porro voluptatum perspiciatis 
            adipisci eveniet dolor quae iste corporis aut quaerat architecto maiores non! Eveniet voluptate suscipit deserunt, 
            quia placeat in laboriosam voluptatem at numquam aspernatur!
        </p>
    </div>
}   {cartShow && (
        <Cart/>
      )}
    </motion.section>
    
  )
}

export default About