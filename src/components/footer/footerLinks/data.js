import React from 'react';
import { Facebook, Instagram, LinkedIn, Twitter } from "@material-ui/icons";

const company = [
  {
    title: 'About us',
    link: '##'
  },
  {
    title: 'Term of use',
    link: '##'
  },
  {
    title: 'Privacy Policy',
    link: '##'
  },
  {
    title: 'Press & Media',
    link: '##'
  }
]
const products = [
  {
    title: 'Market Place',
    link: '##'
  },
  {
    title: 'Magazine',
    link: '##'
  },
  {
    title: 'Seller',
    link: '##'
  },
  {
    title: 'WholeSale',
    link: '##'
  },
  {
    title: 'Services',
    link: '##'
  }
]
const careers = [
  {
    title: 'Become a campus Rep',
    link: '##'
  },
  {
    title: 'Become a vasiti influencer',
    link: '##'
  },
  {
    title: 'Become a campus writer',
    link: '##'
  },
  {
    title: 'Become an affiliate',
    link: '##'
  }
]
const GetInTouch = [
  {
    title: 'Contact Us',
    link: '##'
  },
  {
    title: 'Partner with us',
    link: '##'
  },
  {
    title: 'Advertise with us',
    link: '##'
  },
  {
    title: 'Help/FAQs',
    link: '##'
  }
]


const socialLinks = [
  {
    title: 'facebook',
    icon: <Facebook color="inherit"
      fontSize="large" />,
  },
  {
    title: 'instagram',
    icon: <Instagram
      fontSize="large" />,
  },
  {
    title: 'Twitter',
    icon: <Twitter
      fontSize="large" />,
  },
  {
    title: 'LinkedIn',
    icon: <LinkedIn
      fontSize="large" />,
  }
]

export {
  socialLinks,
  GetInTouch,
  careers,
  company,
  products
}