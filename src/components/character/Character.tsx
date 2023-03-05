
import { People } from '@/interfaces/people';
import { CharactersStyle } from './CharacterStyle';
import Image from 'next/image'

interface PeopleInterface {
    item: People;
}
function Character({ item }: PeopleInterface) {
    return (
        <>
            <CharactersStyle>
                <div className="container-people">
                    <div className="image">
                        <Image
                            src={`https://picsum.photos/2${item.height ? item.height : '00'}/1${item.height ? item.height : '00'}`}
                            alt="Cloudwalk"
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className="content">
                        <h4>{item.name}</h4>
                        <h5>{item.homeworld_string}</h5>
                        <p>HEIGHT • {item.height}</p>
                        <p>MASS • {item.mass}</p>
                        <p>GENDER • {item.gender}</p>
                    </div>
                </div>
            </CharactersStyle>
        </>
    )
}

export default Character
