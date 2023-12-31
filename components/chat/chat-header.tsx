import { Hash } from "lucide-react"

import { MobileToggle } from "@/components/mobile-toggle"
import { UserAvatar } from "@/components/user-avatar"
import { UserButton } from "@clerk/nextjs"
import { SocketIndicator } from "@/components/socket-indicator"
import { ChatVideoButton } from "@/components/chat/chat-video-button"

interface ChatHeaderProps {
  serverId: string
  name: string
  type: "channel" | "conversation"
  imageUrl?: string
}

export const ChatHeader = ({
  serverId,
  name,
  type,
  imageUrl,
}: ChatHeaderProps) => {
  return (
    <div className="text-md font-semibold px-3 flex items-center h-12 border-neutral-200 dark:border-neutral-800 border-b-2">
      <MobileToggle serverId={serverId} />
      {type === "channel" && (
        <Hash className="w-5 h-5 text-zinc-500 dark:text-zinc-400 ml-2 md:mr-1" />
      )}
      {type === "conversation" && (
        <UserAvatar src={imageUrl} className="h-6 w-6 md:h-8 md:w-8 mr-2" />
      )}
      <p className="font-semibold text-md text-black dark:text-white">{name}</p>
      <div className="ml-auto flex items-center gap-x-2">
        {type === "conversation" && <ChatVideoButton />}
        <div className="  items-center hidden md:flex">
          <SocketIndicator />
        </div>
        <div className=" md:hidden">
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "h-8 w-8",
                userButtonPopoverFooter: "hidden",
              },
            }}
          />
        </div>
      </div>
    </div>
  )
}
