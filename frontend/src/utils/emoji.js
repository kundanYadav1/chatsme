
export const funEmojis = [
    "😃", // Smiling Face with Open Mouth
    "😄", // Smiling Face with Open Mouth and Smiling Eyes
    "😁", // Beaming Face with Smiling Eyes
    "😆", // Grinning Squinting Face
    "😅", // Grinning Face with Sweat
    "😂", // Face with Tears of Joy
    "🤣", // Rolling on the Floor Laughing
    "😀", // Grinning Face
    "😊", // Smiling Face with Smiling Eyes
    "😋", // Face Savoring Food
    "😎", // Smiling Face with Sunglasses
    "🤩", // Star-Struck
    "😍", // Smiling Face with Heart-Eyes
    "🥰", // Smiling Face with Hearts
    "😘", // Face Blowing a Kiss
    "😗", // Kissing Face
    "😚", // Kissing Face with Closed Eyes
    "😙", // Kissing Face with Smiling Eyes
    "🤗", // Hugging Face
    "😇", // Smiling Face with Halo
    "🙂", // Slightly Smiling Face
    "🙃", // Upside-Down Face
    "😉", // Winking Face
    "😌", // Relieved Face
    "😛", // Face with Tongue
    "😜", // Winking Face with Tongue
    "😝", // Squinting Face with Tongue
    "😅", // Grinning Face with Sweat
    "🤪", // Zany Face
    "😛", // Stuck-Out Tongue
    "😜", // Winking Face with Stuck-Out Tongue
    "😝", // Squinting Face with Stuck-Out Tongue
    "🤑", // Money-Mouth Face
    "🤓", // Nerd Face
    "😎", // Smiling Face with Sunglasses
    "🤠", // Cowboy Hat Face
    "😏", // Smirking Face
    "😒", // Unamused Face
    "🙄", // Face with Rolling Eyes
    "😬", // Grimacing Face
    "😮", // Face with Open Mouth
    "😯", // Hushed Face
    "😧", // Anguished Face
    "😦", // Frowning Face with Open Mouth
    "😩", // Weary Face
    "😰", // Anxious Face with Sweat
    "😥", // Sad but Relieved Face
    "😢", // Crying Face
    "😭", // Loudly Crying Face
    "😱", // Face Screaming in Fear
    "😖", // Confounded Face
    "😣", // Persevering Face
    "😞", // Disappointed Face
    "😓", // Downcast Face with Sweat
    "😩", // Weary Face
    "😫", // Tired Face
    "😤", // Face with Steam From Nose
    "😡", // Pouting Face
    "😠", // Angry Face
    "🤬", // Face with Symbols on Mouth
    "😈", // Smiling Face with Horns
    "👿", // Angry Face with Horns
    "💀", // Skull
    "☠️", // Skull and Crossbones
    "💩", // Pile of Poo
    "🤡", // Clown Face
    "👹", // Ogre
    "👺", // Goblin
    "👻", // Ghost
    "👽", // Alien
    "👾", // Alien Monster
    "🤖", // Robot Face
    "😺", // Smiling Cat Face with Open Mouth
    "😸", // Grinning Cat Face with Smiling Eyes
    "😹", // Cat Face with Tears of Joy
    "😻", // Smiling Cat Face with Heart-Eyes
    "😼", // Cat Face with Wry Smile
    "😽", // Kissing Cat Face
    "🙀", // Weary Cat Face
    "😿", // Crying Cat Face
    "😾", // Pouting Cat Face
];


export const getRandomEmoji = () => {
	return funEmojis[Math.floor(Math.random() * funEmojis.length)];
};