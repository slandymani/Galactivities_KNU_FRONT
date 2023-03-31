import { Comment } from 'semantic-ui-react';
import { Comment as CommentModel } from '@models/index';

import { formatDistanceToNow } from 'date-fns';
import { Link } from 'react-router-dom';

import { IMAGE_URIS, ROUTES } from '@shared/constants';

interface Props {
  comment: CommentModel;
}

function CommentItem({ comment: { body, createdAt, displayName, username, imageUri } }: Props) {
  return (
    <Comment style={{ padding: '.35rem 0' }}>
      <Comment.Avatar src={imageUri ?? IMAGE_URIS.USER_DEFAULT} />
      <Comment.Content>
        <Comment.Author as={Link} to={`${ROUTES.PROFILE.BASE}/${username}`}>
          {displayName}
        </Comment.Author>
        <Comment.Metadata>
          <h5>{`${formatDistanceToNow(createdAt)} ago`}</h5>
        </Comment.Metadata>
        <Comment.Text style={{ whiteSpace: 'pre-wrap' }}>{body}</Comment.Text>
      </Comment.Content>
    </Comment>
  );
}

export default CommentItem;
