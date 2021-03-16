import React, { useState } from 'react';
import { Replys } from '../../generated/graphql';
import { MyDatabase } from '../../utils/Database';
import { Button } from '../atoms/Button';

type Props = {
  db: MyDatabase;
  id: number;
  content: string;
  userName: string;
  replys: Array<Pick<Replys, 'id' | 'comment'>>;
};

export const Card = ({
  db,
  id,
  content,
  userName,
  replys,
}: Props): JSX.Element => {
  const [isReplyFormOpened, setIsReplyFormOpened] = useState(false);

  const [reply, setReply] = useState('');
  return (
    <div>
      <div className="border p-4 text-right relative">
        <p>{content}</p>
        <p className="text-gray-700 text-sm">by {userName}</p>
        <button
          type="button"
          className="mt-4 text-xs text-blue-800"
          onClick={() => setIsReplyFormOpened((b) => !b)}
        >
          返信
        </button>
        <div className="absolute top-1 right-1">
          <button
            type="button"
            onClick={() => {
              db.posts.find().where('id').eq(id).remove();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4 black"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      {isReplyFormOpened && (
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
              db.posts
                .find()
                .where('id')
                .eq(id)
                .update({
                  $set: {
                    replys: [
                      ...replys,
                      {
                        comment: reply,
                        user_id: 'test1',
                        replied_user_id: 'test2',
                      },
                    ],
                  },
                })
            }
          />
        </div>
      )}
    </div>
  );
};
