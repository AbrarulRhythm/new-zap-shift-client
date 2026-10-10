const SectionTitle = ({ title, subTitle, style = 'text-center text-blue-10', styleTitle, styleSubTitle = 'max-w-179.5 mx-auto' }) => {
    return (
        <div className={`${style} mb-8`}>
            <h2 className={`${styleTitle} text-4xl font-extrabold mb-4`}>{title}</h2>
            <p className={`${styleSubTitle}`}>{subTitle}</p>
        </div>
    );
};

export default SectionTitle;
