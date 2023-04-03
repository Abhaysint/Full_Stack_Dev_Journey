import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #333;
  color: #fff;
`;

const Logo = styled.a`
  font-size: 2rem;
  font-weight: bold;
  text-decoration: none;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
`;

const NavItem = styled.li`
  margin: 0 10px;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: #f0f0f0;
  }
`;

const HeroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background-image: url("https://picsum.photos/1280/720");
  background-size: cover;
  color: #fff;
`;

const HeroText = styled.h1`
  font-size: 4rem;
  text-align: center;
`;

const AboutSection = styled.section`
  padding: 80px;
  background-color: #f0f0f0;
`;

const AboutHeading = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 40px;
`;

const AboutContent = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
`;

const ServiceSection = styled.section`
  padding: 80px;
  background-color: #fff;
`;

const ServiceHeading = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 40px;
`;

const ServiceList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
`;

const ServiceItem = styled.li`
  margin: 0 20px;
  text-align: center;
`;

const ServiceIcon = styled.i`
  font-size: 3rem;
  color: #333;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin: 20px 0;
`;

const ServiceDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
`;

const ContactSection = styled.section`
  padding: 80px;
  background-color: #f0f0f0;
`;

const ContactHeading = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 40px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactInput = styled.input`
  padding: 10px;
  margin: 10px 0;
  width: 100%;
  border: none;
  border-radius: 5px;
`;

const ContactTextarea = styled.textarea`
  padding: 10px;
  margin: 10px 0;
  width: 100%;
  height: 150px;
  border: none;
  border-radius: 5px;
`;

const ContactButton = styled.button`
  padding: 10px 20px;
  margin: 20px 0;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3;
  `;
