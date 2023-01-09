
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const QuestionPreview = ({ question }) => {

    const [authorName, setAuthorName] = useState(question.author.username);
    const currentUser = useSelector(state => state.session.currentUser);

    useEffect(() => {
        if (currentUser && question.authorId === currentUser.id) {
            setAuthorName("you");
        } else {
            setAuthorName(question.author.username);
        }
    }, [currentUser])

    const maxPreviewBodyLength = 100;
    const previewBody = (question.body.length <= maxPreviewBodyLength) ? question.body : question.body.substring(0, maxPreviewBodyLength) + "...";
    
    return (
        <li className="question-preview">
            <Link to={`/questions/${question.id}`}><h3>{question.title}</h3></Link>
            <p>{previewBody}</p>
            <p>{question.answerCount} answer{question.answerCount === 1 ? "" : "s"}</p>
            <p id="author-tag">Asked by <Link to={`/users/${question.authorId}`}>{authorName}</Link></p>
        </li>
    );
};

export default QuestionPreview;