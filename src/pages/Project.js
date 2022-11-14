import { useParams } from 'react-router-dom';

const Project = () => {
    const { name } = useParams();



  return (
    <div>Project Page, showing {name}</div>
  )
}

export default Project