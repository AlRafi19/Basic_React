
const Footer = ({footerText,qoute}) => {
    return (
        <div>
            <h3>{footerText}</h3>
            <footer className='quote'>{qoute}</footer>
        </div>
    );
};

export default Footer;