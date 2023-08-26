

function Footer(props) {
    return (
        <div className="copyright">
            <p>{props.logo}{props.signature}  </p>
        </div>
    );
};

export default Footer;