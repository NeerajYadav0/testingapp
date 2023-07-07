import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DownloadIcon from '@mui/icons-material/Download';
import ShareIcon from '@mui/icons-material/Share';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { LinkedIn, Facebook } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { API_URL } from './apiUrls'
import UI from './ui'
import URL from './urls';
import { Helmet } from 'react-helmet';


export default function Home() {

  const [anchorEl, setAnchorEl] = useState(null);
 
  
  useEffect(() => {
    const metaTags = [
      { property: "og:title", content: "Alignmycareer Course Completion Certificate" },
      { property: "og:url", content: "https://neerajyadav0.github.io/testing-repo/" },
      { property: "og:description", content: "my completion certi" },
      { name: "image", property: "og:image", content: "https://www.alignmycareer.com/api/v1/file/download?file=candidate/6395d09b766c1d23c5ec347e/photo/images1.jpg" },
      { property: "og:image", content: "https://www.alignmycareer.com/api/v1/file/download?file=candidate/6395d09b766c1d23c5ec347e/photo/images1.jpg" },
      { property: "og:image:secure_url", content: "https://www.alignmycareer.com/api/v1/file/download?file=candidate/6395d09b766c1d23c5ec347e/photo/images1.jpg" },
      { property: "og:site_name", content: "Alignmycareer" },
      { property: "og:locale", content: "en_US" },
    ];
    document.title = "Alignmycareer Course Completion Certificate";

    metaTags.forEach((meta) => {
      const metaTag = document.createElement('meta');
      Object.keys(meta).forEach((key) => {
        metaTag.setAttribute(key, meta[key]);
      });
      document.head.appendChild(metaTag);
    });console.log('entered');

  }, []);




  const candidateData = {
    certificateDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
    assessmentDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
    photo: '',
    certificateLink: 'https://www.alignmycareer.com/api/v1/file/download?file=candidate/6395d09b766c1d23c5ec347e/photo/images1%20(1).jpg',
    name: 'Neeraj Yadav',
    assessmentName: 'Java Assessment',
    rating: 'expert',
  }
  const photo = false;

  const handelDownload = () => {

  }
  const handelShare = (event) => {
    setAnchorEl(event.currentTarget);;
  }
  const handleClose = () => {
    setTimeout(() => {
      setAnchorEl(null);
    }, 0);

  };

  useEffect(() => {
    // Dynamically set the OG tags
    const ogTitle = 'My Page Title';
    const ogDescription = 'My page description';
    const ogImageUrl = 'https://example.com/image.jpg';

    const ogTitleTag = document.querySelector('meta[property="og:title"]');
    const ogDescriptionTag = document.querySelector('meta[property="og:description"]');
    const ogImageUrlTag = document.querySelector('meta[property="og:image"]');

    if (ogTitleTag) {
      ogTitleTag.setAttribute('content', ogTitle);
    }
    if (ogDescriptionTag) {
      ogDescriptionTag.setAttribute('content', ogDescription);
    }
    if (ogImageUrlTag) {
      ogImageUrlTag.setAttribute('content', ogImageUrl);
    }
  }, []);
  const handelExplore = () => {
    window.open(URL.ASSESSMENT, '_blank');
  }
  const render=()=>{
    const metaTags = [
      { property: "og:title", content: "Alignmycareer Course Completion Certificate" },
      { property: "og:url", content: "https://neerajyadav0.github.io/testing-repo/" },
      { property: "og:description", content: "my completion certi" },
      { name: "image", property: "og:image", content: "https://www.alignmycareer.com/api/v1/file/download?file=candidate/6395d09b766c1d23c5ec347e/photo/images1%20(1).jpg" },
      { property: "og:image", content: "https://www.alignmycareer.com/api/v1/file/download?file=candidate/6395d09b766c1d23c5ec347e/photo/images1%20(1).jpg" },
      { property: "og:image:secure_url", content: "https://www.alignmycareer.com/api/v1/file/download?file=candidate/6395d09b766c1d23c5ec347e/photo/images1%20(1).jpg" },
      { property: "og:site_name", content: "Alignmycareer" },
      { property: "og:locale", content: "en_US" },
    ];
    metaTags.forEach((meta) => {
      const metaTag = document.createElement('meta');
      Object.keys(meta).forEach((key) => {
        metaTag.setAttribute(key, meta[key]);
      });
      document.head.appendChild(metaTag);
    });console.log('entered');
    return null;
  }
  
  return (<> {render()}
  <div className='container'>
      {console.log("indata")}
      
      <Grid container className='d-flex flex-wrap justify-content-evenly'>
        <Grid item md={8} sm={12} xs={12} className='d-flex flex-column gap-3'>
          <div >
            <img style={{ width: '100%' }} src={candidateData.certificateLink} alt='certificate img' />
          </div>
          <div>
            {candidateData.certificateDesc}
          </div>
        </Grid>
        <Grid item md={3} sm={12} xs={12} className='d-flex flex-column gap-3'>
          <div style={{ fontWeight: 'bold', fontSize: "20px" }}>Certificate Recipient:</div>
          <div className='d-flex gap-2 align-items-center'>
            {photo ? (
              <img
                src={API_URL.PHOTO_PRE + photo}
                className="photo-in-upload-profile logo"
                alt={UI.ALT_CANDIDATE_PROFILE}
              />
            ) : (
              <AccountCircleIcon
                sx={{
                  borderRadius: '50%',
                  backgroundColor: 'gray',
                  width: '3.25rem',
                  height: '3.25rem',
                  p: 1
                }}
              />
            )}
            <span className='ml-2'>{candidateData.name}</span>
          </div>
          <div style={{ fontWeight: 'bold', fontSize: "20px" }}>
            About Assessment:
          </div>
          <div style={{ fontWeight: 'bold' }}>{candidateData.assessmentName}</div>
          <div>
            <span style={{ fontWeight: 'bold' }}>Description: </span><span style={{ color: 'blue' }}>{candidateData.assessmentDesc}</span>
          </div>
          <div>
            <span style={{ fontWeight: 'bold' }}>Rating: </span><span style={{ color: 'red' }}>{candidateData.rating}</span>
          </div>
          <div className='d-flex flex-wrap justify-content-between' >
            <Button
              onClick={handelDownload}
              startIcon={<DownloadIcon />}
            >
              <span
                className='color-1D8FF2'
              >
                {UI.DOWNLOAD}
              </span>
            </Button>
            <Button
              onClick={handelShare}
              startIcon={
                <ShareIcon />
              }
            >
              <span
                className='color-1D8FF2'

              >
                {UI.SHARE}
              </span>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}

              >
                <Grid container direction="row" >
                  <Grid item>
                    <MenuItem>
                      <Link to=' '> <LinkedIn /></Link>
                    </MenuItem>
                  </Grid>
                  <Grid item>
                    <MenuItem >
                      <Link to=' '> <Facebook /></Link>
                    </MenuItem>
                  </Grid>
                </Grid>
              </Menu>
            </Button>
            <Button
              onClick={handelExplore}
              startIcon={<UnfoldMoreIcon />}
            >
              <span
                className='color-1D8FF2'
              >
                {UI.EXPLORE}
              </span>
            </Button>
          </div>

        </Grid>
      </Grid>
    </div>
    </>
  )
}
