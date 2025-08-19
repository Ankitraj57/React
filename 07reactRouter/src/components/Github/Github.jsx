import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-orange-100 p-4">
            <div className="bg-gray-800 text-white rounded-xl shadow-lg p-8 max-w-md w-full">
                <div className="flex flex-col items-center">
                    <img 
                        src={data.avatar_url} 
                        alt="GitHub Avatar" 
                        className="w-32 h-32 rounded-full border-4 border-orange-500 mb-4"
                    />
                    <h2 className="text-2xl font-bold mb-2">{data.name}</h2>
                    <h3 className="text-lg text-gray-300 mb-2">@{data.login}</h3>
                    <p className="text-center text-gray-400 mb-4">{data.bio || "No bio available."}</p>
                    <div className="flex justify-between w-full bg-gray-700 rounded-lg p-4 mb-4">
                        <div className="text-center">
                            <p className="text-xl font-bold">{data.followers}</p>
                            <p className="text-gray-400 text-sm">Followers</p>
                        </div>
                        <div className="text-center">
                            <p className="text-xl font-bold">{data.public_repos}</p>
                            <p className="text-gray-400 text-sm">Repos</p>
                        </div>
                        <div className="text-center">
                            <p className="text-xl font-bold">{data.following}</p>
                            <p className="text-gray-400 text-sm">Following</p>
                        </div>
                    </div>
                    <span className="px-4 py-2 bg-orange-600 rounded-full font-medium">{data.type}</span>
                </div>
            </div>
        </div>
    )
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/Ankitraj57");
    if (!response.ok) throw new Error("Failed to fetch GitHub data");
    return response.json();
}
