const MainTitle = ({ title }) => {
    return (
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
    );
  }
  
export default MainTitle;