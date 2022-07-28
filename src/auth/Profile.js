import { useAuth0 } from '@auth0/auth0-react';
import { useQuery } from 'react-query';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { motion } from 'framer-motion/dist/framer-motion';

const Profile = () => {
    function useRobots() {
        return useQuery('Robots', async () => {
            const response  = await fetch('https://random-data-api.com/api/users/random_user');
            const data = await response.json();
            return data;
        });  
    }
    const { data, isLoading, isFetching, isError } = useRobots();
    const { user, isAuthenticated } = useAuth0();

    if(isLoading)  return ( <div>Loading...</div> )
    else if(isError)    return ( <div>Error</div> )
    else if(isFetching) return ( <div>Refreshing you data...</div> )

    if(!isAuthenticated) return null;
    
    return (
        <div>
            <Parallax pages={2} style={{ top: '0', left: '0' }}>
                <ParallaxLayer
                    offset={0}
                    speed={10}
                    className="first"
                    style={{ backgroundSize: 'cover', height: '100vh', padding: '10rem' }}>
                    <div className='flex'>
                        <motion.div 
                        transition={{ delay: 0.5 }}
                        initial={{ opacity: 0, y: -100, rotate: 0 }} 
                        animate={{ opacity: 1, y: 0, rotate: 1080 }}>
                            <img src={user.picture} alt="..." />
                        </motion.div>
                        <motion.div 
                        transition={{ delay: 1 }}
                        initial={{ x: 10000 }} 
                        animate={{ x: 0 }}>
                            <h3 style={{ color: "white", fontWeight: "500" }}>{user.name}</h3>
                        </motion.div>
                        <motion.div 
                        transition={{ delay: 1.5 }}
                        initial={{ x: -10000 }} 
                        animate={{ x: 0 }}>
                            <h4 style={{ color: "white", fontWeight: "600" }}>{user.email}</h4>
                        </motion.div>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: 'rgb(28, 6, 28)', opacity: '0.5' }} />

                <ParallaxLayer
                    offset={1}
                    speed={0.5}
                    style={{
                    color: 'white',
                    height: '100vh',
                    padding: '10rem'
                    }}>
                        <div className='flex'>
                            <p>{data.first_name} {data.last_name}</p>
                            <p>{data.username}</p>
                            <img src={data.avatar} alt="..."/>
                            <p>{data.phone_number}</p>
                        </div>
                </ParallaxLayer>
            </Parallax>
        </div>
    );
}

export default Profile;