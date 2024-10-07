'use client' 

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { Navigation,  A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles



interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }


  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
        className='w-10/12 mx-auto'
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }
  
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  

const Nav = () => {
    const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

    return (
        <div className='w-full flex justify-center items-center flex-col'>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className="border-none">
  <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
    <Tab label="All" {...a11yProps(0)} />
    <Tab label="Photos" {...a11yProps(1)} />
    <Tab label="Videos" {...a11yProps(2)} />
  </Tabs>
</Box>
<CustomTabPanel value={value} index={0}>

<Swiper
      // install Swiper modules
      modules={[Navigation,  A11y]}
      spaceBetween={20}
      slidesPerView={3}
      pagination={{ clickable: true }}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
    {[1,2,3,4,5,6,7,8].map(item=>{
        return       <SwiperSlide key={item} className='h-[200px]'>
        <figure className='w-full h-[200px] bg-slate-400'>
        <img src={`/photo${item}.png`} className='w-full h-full object-cover'/>
        </figure>
      </SwiperSlide>

    })}
    </Swiper>

</CustomTabPanel>
<CustomTabPanel value={value} index={1}>
<Swiper
      // install Swiper modules
      modules={[Navigation,  A11y]}
      spaceBetween={20}
      slidesPerView={3}
      pagination={{ clickable: true }}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
    {[1,2,3,4,5,6,7,8].map(item=>{
        return       <SwiperSlide key={item} className='h-[200px]'>
        <figure className='w-full h-[200px] bg-slate-400'>
        <img src={`/photo${item}.png`} className='w-full h-full object-cover'/>
        </figure>
      </SwiperSlide>

    })}
    </Swiper>
</CustomTabPanel>
<CustomTabPanel value={value} index={2}>
  Item Three
</CustomTabPanel>
        </div>
    );
};

export default Nav;