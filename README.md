# tIrc
twilio integration for irc

### From IRC

`!tIrc <username> <message>` message someone who is not in the room

`!tIrc add <number>` register your number with the bot for the current room.  This will override any previous number.

`!tIrc delete` remove your number from the bot for the current room.

### From txt

`<message>` any message sent to the bot will automatically be transferred to the default chat room

`!<room> <message>` send a message to a specific room. you must have already registered with this room.

`!stop <room>` no longer receive texts from a room.  If the room is blank, all notifications will stop.
