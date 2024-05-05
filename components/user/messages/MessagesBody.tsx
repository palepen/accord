"use client";

import { useMessagesQuery } from "@/hooks/use-messages-query";
import { ExtendedConversation } from "@/types/extended";
import { Profile } from "@/types/types";
import Message from "@/components/user/messages/Message";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Fragment } from "react";
import { Button } from "@/components/ui/button";


interface MessagesBodyProps {
    profile: Profile;
    conversation: ExtendedConversation;
};

const MessagesBody = ({ profile, conversation }: MessagesBodyProps) => {

    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isFetching
    } = useMessagesQuery(conversation.id);

    if (!data?.pages.length) {
        return (
            <div className="flex items-center justify-center h-full w-full">
                Conversation between {profile.username} and {conversation.other.username}
            </div>
        );

        {/* <Button onClick={() => hasNextPage && !isFetchingNextPage && !isFetching && fetchNextPage()}>
                load more
            </Button> */}
    }

    return (
        <div className="flex flex-col-reverse overflow-auto h-full border-2" >
            {
                data.pages.map((page, index) => (
                    <Fragment key={index}>
                        {
                            page.data.map((message, index) => (
                                <Message
                                    key={index}
                                    sender={message.sent_by === profile.id ? profile : conversation.other}
                                    profile={profile}
                                    conversation={conversation}
                                    message={message}
                                />
                            ))
                        }
                    </Fragment>
                ))
            }
        </div >

    );

};

export default MessagesBody;