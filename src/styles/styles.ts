import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=PT+Sans:wght@700&display=swap');


    @font-face {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        font-style: normal;
    }

    @font-face {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        font-style: normal;
    }
    span{
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        color: rgb(14, 14, 14);}
    body,
    html,
    a {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        color: rgb(14, 14, 14);
    }

    body {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        background: #fff;
        position: relative;
        overflow-x: hidden;
    }

    /* Decorative subtle background blobs on white */
    body::before {
        content: "";
        position: fixed;
        inset: 0;
        pointer-events: none;
        background-image:
            radial-gradient(circle at 10% 12%, rgba(101,32,212,0.08) 0 220px, transparent 420px),
            radial-gradient(circle at 88% 78%, rgba(0,122,255,0.06) 0 260px, transparent 520px),
            radial-gradient(circle at 55% 40%, rgba(255,193,7,0.03) 0 160px, transparent 320px);
        background-repeat: no-repeat;
        background-attachment: fixed;
        z-index: 0;
    }

    /* Keep main app content above decorative layers */
    #root {
        position: relative;
        z-index: 1;
    }

    a:hover {
        color: rgb(0, 0, 0);
    }

    input,
    textarea {
        border-radius: 4px;
        border: 0;
        background: rgb(241, 242, 243);
        transition: all 0.6s ease-in-out;
        outline: none;
        width: 100%;
        padding: 1rem 1.25rem;

        :focus-within {
            background: none;
            box-shadow: rgb(101, 32, 212) 0px 0px 0px 1px;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5 {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        color: rgb(101, 32, 212); 
        font-size: 56px;
        line-height: 1.18;

        @media only screen and (max-width: 890px) {
            font-size: 47px;
        }

        @media only screen and (max-width: 414px) {
            font-size: 32px;
        }
    }

    h6 {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        color: rgb(101, 32, 212);
        font-size: 44px;
        line-height: 1.18;

        @media only screen and (max-width: 768px) {
            font-size: 28px;
        }
    }

    p {
        color: rgb(14, 14, 14);
        font-size: 21px;
        line-height: 1.41;
    }

    h1 {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        outline: none;
        color: rgb(14, 14, 14);

        :hover {
            color:rgb(0, 0, 0);
        }
    }

    *:focus {
        outline: none;
    }

    .about-block-image svg {
        text-align: center;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-top: 1.5rem;
    }

    .ant-drawer-content-wrapper {
        width: 300px !important;
    }
`;
