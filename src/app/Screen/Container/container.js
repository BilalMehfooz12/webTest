const Container = ({ children }) => {
    return (
        <div className="lg:mx-[140px] md:mx-[30px] sm:mx-[10px]">
            {children}
        </div>
    );
};

export default Container;
