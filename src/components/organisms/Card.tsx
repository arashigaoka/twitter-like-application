import { gql, useMutation } from '@apollo/client';
import React, { useState } from 'react';
import {
  Replys,
  AddReplyMutation,
  AddReplyMutationVariables,
} from '../../generated/graphql';
import { Button } from '../atoms/Button';

type Props = {
  id: number;
  content: string;
  userName: string;
  replys: Array<Pick<Replys, 'id' | 'comment'>>;
};

const ADD_REPLY = gql`
  mutation addReply($object: replys_insert_input!) {
    insert_replys_one(
      object: $object
      on_conflict: { constraint: replys_pkey, update_columns: comment }
    ) {
      id
    }
  }
`;

export const Card = ({ id, content, userName, replys }: Props): JSX.Element => {
  const [isReplyFormOpened, setIsReplyFormOpened] = useState(false);
  const [addReply] = useMutation<AddReplyMutation, AddReplyMutationVariables>(
    ADD_REPLY,
  );
  const [reply, setReply] = useState('');
  return (
    <div>
      <div className="border p-4 text-right">
        <p>{content}</p>
        <p className="text-gray-700 text-sm">by {userName}</p>
        <button
          type="button"
          className="mt-4 text-xs text-blue-800"
          onClick={() => setIsReplyFormOpened((b) => !b)}
        >
          返信
        </button>
      </div>
      {isReplyFormOpened && replys.length > 0 && (
        <div className="text-gray-400 text-xs w-3/4 ml-auto">
          <ul className=" space-y-2 ">
            {replys.map((reply) => (
              <li className="border p-4 mt-2" key={reply.id}>
                {reply.comment}
              </li>
            ))}
            <li>
              <input
                type="text"
                value={reply}
                className="border-gray-400 w-full"
                onChange={(e) => setReply(e.target.value)}
              />
            </li>
          </ul>
          <Button
            label="reply"
            clickHandler={() =>
              addReply({
                variables: {
                  object: {
                    comment: reply,
                    user_id: 'test1',
                    replied_user_id: 'test2',
                    post_id: id,
                  },
                },
              })
            }
          />
        </div>
      )}
    </div>
  );
};
