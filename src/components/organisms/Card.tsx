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
