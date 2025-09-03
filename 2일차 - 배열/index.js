let animals= [
    "Aardvark",
    "Albatross",
    "Alligator",
    "Alpaca",
    "Ant",
    "Ape",
    "Armadillo",
    "Donkey",
    "Baboon",
    "Badger",
    "Barracuda",
    "Bat",
    "Bear",
    "Beaver",
    "Bee",
    "Bison",
    "Cat",
    "Caterpillar",
    "Cattle",
    "Chamois",
    "Cheetah",
    "Chicken",
    "Chimpanzee",
    "Chinchilla",
    "Chough",
    "Clam",
    "Cobra",
    "Cockroach",
    "Cod",
    "Cormorant",
    "Dugong",
    "Dunlin",
    "Eagle",
    "Echidna",
    "Eel",
    "Eland",
    "Elephant",
    "Elk",
    "Emu",
    "Falcon",
    "Ferret",
    "Finch",
    "Fish",
    "Flamingo",
    "Fly",
    "Fox",
    "Frog",
    "Gaur", 
    "Gazelle",
    "Gerbil",
    "Giraffe",
    "Grasshopper",
    "Heron",
    "Herring",
    "Hippopotamus",
    "Hornet",
    "Horse",
    "Kangaroo",
    "Kingfisher",
    "Koala",
    "Kookabura",
    "Moose",
    "Narwhal",
    "Newt",
    "Nightingale",
    "Octopus",
    "Okapi",
    "Opossum", 
    "Quail",
    "Quelea",
    "Quetzal",
    "Rabbit", 
    "Raccoon",
    "Rail",
    "Ram",
    "Rat",
    "Raven",
    "Red deer",
    "Sandpiper",
    "Sardine",
    "Sparrow",
    "Spider",
    "Spoonbill",
    "Squid",
    "Squirrel",
    "Starling",
    "Stingray",
    "Tiger",
    "Toad",
    "Whale",
    "Wildcat",
    "Wolf",
    "Worm",
    "Wren",
    "Yak",
    "Zebra"
]


//pop() : 배열 끝에 있는 아이템을 제거, 그 아이템 값을 리턴
//push('아이템'): 배열 끝에 아이템 추가, 배열의 최종 길이 리턴
//includes('아이템'): 배열에 아이템이 포함되어 있으면 true 리턴, 아니면 false 리턴
//indexOf('아이템'): 아이템의 인덱스 번호를 리턴
//slice(시작점, 끝점): 시작점~끝점(미포함) 까지 배열을 복사해서 리턴
//splice(시작점, 개수): 시작점부터 개수만큼 실제 배열에서 아이템 제거
//length : 배열 함수는 아니지만 배열의 크기를 리턴해주는 속성

// 어레이에 마지막 아이템 “Zebra” 제거하기
animals.pop()
console.log(animals)

// 주어진 어레이에 “Dog” 추가하기
animals.push("Dog")
console.log(animals)

// 주어진 어레이에 “Mosquito”,“Mouse”,“Mule” 추가하기
animals.push("Mosquito","Mouse","Mule")
console.log(animals)

// 해당 어레이에는 "Human"이 있는가?
console.log(animals.includes("Human"))

// 해당 어레이에는 “Cat” 이 있는가?
console.log(animals.includes("Cat"))

// "Red deer"을 "Deer"로 바꾸시오
animals[animals.indexOf("Red deer")] = "Deer"
console.log(animals)

// "Spider"부터 3개의 아이템을 기존 어레이에서 제거하시오
animals.splice(animals.indexOf("Spider"),3)
console.log(animals)

// "Tiger"부터 그 이후의 값을 제거하시오 (Tiger 포함임)
animals.splice(animals.indexOf("Tiger"))
console.log(animals)

// "B"로 시작되는 아이템인 "Baboon"부터 "Bison"까지 가져와 새로운 어레이에 저장하시오
console.log(animals.indexOf("Baboon")) //8
console.log(animals.indexOf("Bison")) //15, Bison까지 자르려면 16에서 끊어야 함(+1)

let animals2 = animals.slice(animals.indexOf("Baboon"),animals.indexOf("Bison") + 1)
console.log(animals2)
