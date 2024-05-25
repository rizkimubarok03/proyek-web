import React from "react";
import{ graphql, useStaticQuery } from "gatsby";

const Footer = () => {

    const data = useStaticQuery(graphql`
        query {
            site {
            siteMetadata {
            author
                }
            }
        }
    `)
    
    return (
        <footer className="text-center py-96">
            <span>©{data.site.siteMetadata.author}2024 Sumber Pasir Dan Batu Jabodetabek dan luar pulau | Powered by Sumber Pasir</span>
        </footer>
    )
}

export default Footer