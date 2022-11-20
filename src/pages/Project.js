import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { PrismicRichText, usePrismicDocumentByUID } from '@prismicio/react'
import play from '../assets/util/play.png';


const ProjectContainer = styled.div`
    border: 1px solid black;
    background-color: #61dafb;
`;

const BigImgContaienr = styled.div`
    border: 1px solid green;
    position: relative;

    img { vertical-align: top; }
`;

const BigImgTextContainer = styled.div`
    border: 1px solid red;
    display: flex;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;

    h2 {
        margin: 0;
    }
`;


const ConceptContainer = styled.div`
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1200px;
    margin: auto;
    justify-content: center;
    padding: 2rem;
`;


const VideosSection = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;

    h3 {
        text-align: center;
    }
`;

const VideosContainer = styled.div`
    display: flex;
    position: relative;
    flex-direction: row;
`;
const VideoContainer = styled.div`
    display: flex;
    position: relative;
    padding: 1rem;
`;

const ChallengeContainer = styled.div`
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1200px;
    margin: auto;
    justify-content: center;
    padding: 2rem;
`;

const ImageScrollerSection = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    padding: 2rem;
`;

const SolutionContainer = styled.div`
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1200px;
    margin: auto;
    justify-content: center;
    padding: 2rem;
`;



const ProcessImagesSection = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;

    h3 {
        text-align: center;
    }
`;

const ProcessImagesContainer = styled.div`
    display: flex;
    position: relative;
    flex-direction: row;
`;
const ProcessImageContainer = styled.div`
    display: flex;
    position: relative;
    padding: 1rem;
`;


const ProcessContainer = styled.div`
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1200px;
    margin: auto;
    justify-content: center;
    padding: 2rem;
`;


// define styles for class play-img
// position absolute is used to position the image in the middle of the container
const playImg = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '30px',
    height: '30px',
    cursor: 'pointer',
    zIndex: '100'
}



const Project = () => {
    const { name } = useParams();
    const [page] = usePrismicDocumentByUID('project', '1');
    // const [project] = useAllPrismicDocumentsByType('project');
    console.log("what is project");
    console.log(page);



  return (
    <>
        {/* <div>Project Page, showing {name}</div> */}
        <div>
            {/* <p>{page.id}</p> */}
            {page && (
                // <PrismicRichText field={page.data.client[0].text} />
                <ProjectContainer>
                    <BigImgContaienr>
                        <img src={page.data.big_image.url} alt="project" style={{'width': '100%'}}/>
                        <BigImgTextContainer>
                            <h2>{page.data.client[0].text}</h2>
                            <p>{page.data.name[0].text}</p>
                        </BigImgTextContainer>
                    </BigImgContaienr>


                    <ConceptContainer>
                        <h3>Concept</h3>
                        <h5>{page.data.concept[0].text}</h5>
                        <p>{page.data.concept[1].text}</p>
                    </ConceptContainer>


                    <VideosSection>
                        <h3>View Videos</h3>
                        <VideosContainer>
                            {page.data.video_thumbnails.map((video, index) => (
                                <VideoContainer key={video.vimeo_id[0].text}>
                                    <img src={video.video_thumbnrail_link[0].text} alt="video" style={{'width': '100%'}}/>
                                    {/* display play over the image */}
                                    <img src={play} alt="play" className="play-img" style={playImg}/>
                                </VideoContainer>
                            ))}
                        </VideosContainer>

                    </VideosSection>


                    <ChallengeContainer>
                        <h3>Challenge</h3>
                        <h5>{page.data.challenge[0].text}</h5>
                        <p>{page.data.challenge[1].text}</p>
                    </ChallengeContainer>


                    <ImageScrollerSection>
                        {/* todo: add react-responsive-carousel */}

                    </ImageScrollerSection>


                    <SolutionContainer>
                        <h3>Solution</h3>
                        <h5>{page.data.solution[0].text}</h5>
                        <p>{page.data.solution[1].text}</p>
                    </SolutionContainer>

                    {/* <img src={page.data.process_photo_gallery[0].process_photo.url} alt="process" style={{'width': '100%'}}/> */}

                    <ProcessImagesSection>
                        <h3>View Images</h3>
                        <ProcessImagesContainer>
                            {page.data.process_photo_gallery.map((image, index) => (
                                <ProcessImageContainer key={index}>
                                    <img src={image.process_photo.url} alt="video" style={{'width': '100%'}}/>
                                </ProcessImageContainer>
                            ))}
                        </ProcessImagesContainer>

                    </ProcessImagesSection>


                    <ProcessContainer>
                        <h3>Process</h3>
                        <h5>{page.data.process[0].text}</h5>
                        <p>{page.data.process[1].text}</p>
                    </ProcessContainer>


                {/* <p>{page.data.client[0].text}</p> */}
                </ProjectContainer>
            )}
        </div>
    </>
  )
}

export default Project