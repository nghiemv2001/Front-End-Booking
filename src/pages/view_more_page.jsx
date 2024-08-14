import ContentDescriptionView from "./view_more_page/components/ContentDescriptionView";
import Header from "./view_more_page/components/Header";
import ImageViewSwiper from "./view_more_page/components/ImageViewSwiperSlide";

function ViewMorePage(){
    return (
        <>
         <Header/>
       <ImageViewSwiper/>
       <ContentDescriptionView/>
        </>
    );
}

export default ViewMorePage;