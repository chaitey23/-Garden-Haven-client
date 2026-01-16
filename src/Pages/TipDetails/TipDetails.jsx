import React, { useEffect, useState } from 'react';
import { BiLike, BiCalendar, BiTime, BiLeaf, BiCategory } from 'react-icons/bi';
import { FaArrowLeft, FaSeedling, FaSun, FaTint, FaThermometerHalf, FaUser } from 'react-icons/fa';
import { Link, useParams } from 'react-router';
import usePageTitle from '../../hooks/usepageTitle';

const TipDetails = () => {
    usePageTitle("Tip Details")
    const { id } = useParams();
    const [tip, setTip] = useState(null);
    const [liking, setLiking] = useState(false);
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        fetch(`https://gardening-hub-server-ten.vercel.app/tips/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setTip(data);
                const hasLiked = localStorage.getItem(`tip_${id}_liked`);
                if (hasLiked) setLiked(true);
            })
    }, [id])

    const handleLike = async () => {
        if (liking || liked) return;
        setLiking(true);

        await fetch(`https://gardening-hub-server-ten.vercel.app/tips/like/${id}`, {
            method: "PUT",
            headers: { 'content-type': "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setTip(prev => ({ ...prev, totalLiked: prev.totalLiked + 1 }));
                    setLiked(true);
                    localStorage.setItem(`tip_${id}_liked`, 'true');
                }
            })
            .catch(err => console.error("Like request failed", err))
            .finally(() => setLiking(false));
    }

    if (!tip) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-lime-50 flex flex-col items-center justify-center p-4">
                <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-r from-emerald-400 to-lime-400 rounded-full animate-pulse"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <FaSeedling className="text-3xl text-white" />
                    </div>
                </div>
                <p className="mt-6 text-emerald-700 font-semibold text-lg">Growing your gardening wisdom...</p>
                <p className="text-gray-500 mt-2">Loading tip details</p>
            </div>
        )
    }

    const getDifficultyBadge = (difficulty) => {
        const styles = {
            easy: "bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border border-green-200",
            medium: "bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-800 border border-amber-200",
            hard: "bg-gradient-to-r from-red-100 to-pink-100 text-red-800 border border-red-200"
        };
        return styles[difficulty.toLowerCase()] || styles.easy;
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-lime-50">
            <div className="relative overflow-hidden bg-gradient-to-r from-emerald-600 to-lime-600 text-white">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="container mx-auto px-4 py-8 relative">
                    <div className="flex items-center justify-between">
                        <Link
                            to='/browseTips'
                            className="inline-flex items-center gap-3 px-4 py-2.5 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-all group"
                        >
                            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                            <span className="font-medium">Back to Tips</span>
                        </Link>

                        <div className="flex items-center gap-4">
                            <div className="hidden md:flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl">
                                <BiCategory />
                                <span className="font-medium">{tip.category}</span>
                            </div>
                            <div className={`px-4 py-2 rounded-xl font-semibold ${getDifficultyBadge(tip.difficulty)}`}>
                                {tip.difficulty}
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 max-w-3xl">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                <FaUser className="text-lg" />
                            </div>
                            <div>
                                <p className="font-medium">{tip.userName}</p>
                                <p className="text-sm opacity-90">Gardening Expert</p>
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                            {tip.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-4 text-sm">
                            <div className="flex items-center gap-2">
                                <BiCalendar />
                                <span>{new Date().toLocaleDateString('en-US', {
                                    weekday: 'long',
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <BiLeaf />
                                <span>{tip.plantType}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <BiTime />
                                <span>5 min read</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" className="w-full h-auto">
                        <path
                            fill="#f0fdf4"
                            d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,74.7C1120,75,1280,53,1360,42.7L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
                        ></path>
                    </svg>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8 -mt-12 relative z-10">
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-emerald-100">
                            <div className="relative h-72 md:h-96 overflow-hidden group">
                                <img
                                    src={tip.image}
                                    alt={tip.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                <div className="absolute bottom-4 right-4">

                                </div>
                            </div>

                            <div className="p-6 md:p-8">
                                <div className="prose prose-lg max-w-none">
                                    <h2 className="text-2xl font-bold text-emerald-800 mb-4 flex items-center gap-3">
                                        <FaSeedling className="text-emerald-600" />
                                        About This Gardening Tip
                                    </h2>

                                    <div className="text-gray-700 text-lg leading-relaxed bg-gradient-to-r from-emerald-50 to-lime-50 p-6 rounded-2xl border-l-4 border-emerald-400 mb-8">
                                        {tip.description}
                                    </div>

                                    <div className="bg-gradient-to-br from-emerald-50 to-white p-6 rounded-2xl border border-emerald-100 mb-8">
                                        <h3 className="text-xl font-bold text-emerald-800 mb-4">Key Takeaways</h3>
                                        <ul className="space-y-3">
                                            {[
                                                "Perfect for beginner gardeners",
                                                "Uses common household items",
                                                "Eco-friendly approach",
                                                "Visible results within weeks"
                                            ].map((point, index) => (
                                                <li key={index} className="flex items-center gap-3">
                                                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                        <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                                                    </div>
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>


                                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                                        <div className="bg-gradient-to-br from-amber-50 to-white p-5 rounded-2xl border border-amber-100">
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                                                    <FaSun className="text-xl text-amber-600" />
                                                </div>
                                                <h4 className="font-bold text-amber-800">Sunlight</h4>
                                            </div>
                                            <p className="text-gray-700">Requires 4-6 hours of direct sunlight daily. Morning sun is ideal for most plants.</p>
                                        </div>

                                        <div className="bg-gradient-to-br from-blue-50 to-white p-5 rounded-2xl border border-blue-100">
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                                                    <FaTint className="text-xl text-blue-600" />
                                                </div>
                                                <h4 className="font-bold text-blue-800">Watering</h4>
                                            </div>
                                            <p className="text-gray-700">Water when top inch of soil is dry. Avoid overwatering to prevent root rot.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">

                        <div className="bg-gradient-to-br from-emerald-600 to-lime-600 text-white rounded-2xl p-6 shadow-xl">
                            <div className="text-center mb-6">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <BiLike className="text-3xl" />
                                </div>
                                <h3 className="text-xl font-bold">Found this helpful?</h3>
                                <p className="opacity-90 mt-2">Support {tip.userName}'s work</p>
                            </div>

                            <div className="text-center mb-6">
                                <div className="text-5xl font-bold">{tip.totalLiked}</div>
                                <p className="opacity-90">Gardeners liked this tip</p>
                            </div>

                            <button
                                onClick={handleLike}
                                disabled={liking || liked}
                                className={`
                                    w-full py-3 rounded-xl font-bold transition-all duration-300
                                    flex items-center justify-center gap-3
                                    ${liked
                                        ? 'bg-white text-emerald-700 cursor-default'
                                        : liking
                                            ? 'bg-emerald-700 cursor-not-allowed'
                                            : 'bg-white/20 hover:bg-white/30 backdrop-blur-sm'
                                    }
                                `}
                            >
                                {liking ? (
                                    <>
                                        <span className="loading loading-spinner loading-sm"></span>
                                        Processing...
                                    </>
                                ) : liked ? (
                                    <>
                                        <BiLike className="text-xl" />
                                        Liked Successfully!
                                    </>
                                ) : (
                                    <>
                                        <BiLike className="text-xl" />
                                        Like This Tip
                                    </>
                                )}
                            </button>
                        </div>


                    </div>
                </div>


            </div>


        </div>
    );
};

export default TipDetails;