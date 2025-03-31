'use client';

import { useState, useEffect } from 'react';

export default function Page() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
            {/* Header */}
            <header className="bg-white shadow-sm sticky top-0 z-10">
                <div className="w-4/5 mx-auto py-4 flex justify-between items-center">
                    <div className="flex items-center">
                        <h1 className="text-2xl md:text-3xl font-bold text-red-700">
                            TRATTORIA IZAKAYA
                        </h1>
                    </div>
                    <div className="text-right">
                        <p className="text-sm text-gray-500">2023年12月更新</p>
                        <p className="text-xs text-gray-400">公式サイト</p>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section
                className={`relative h-[70vh] bg-cover bg-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white w-4/5 mx-auto">
                    <h2 className="text-4xl md:text-6xl font-bold mb-4 text-center">
                        イタリアンと日本の融合
                    </h2>
                    <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl">
                        伝統的な居酒屋スタイルで楽しむ本格イタリアン料理
                    </p>
                    <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full min-h-[44px] min-w-[44px] focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-all duration-300 transform hover:scale-105">
                        ご予約はこちら
                    </button>
                </div>
            </section>

            {/* Main Content */}
            <main className="w-4/5 mx-auto py-16">
                {/* Introduction */}
                <section
                    className={`mb-16 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                >
                    <h2 className="text-3xl font-bold mb-6 text-center">イタリアン居酒屋の魅力</h2>
                    <p className="text-lg leading-relaxed max-w-3xl mx-auto text-center mb-8">
                        当店では、イタリア料理の豊かな風味と日本の居酒屋文化を融合させた独自の体験をご提供しています。厳選された食材と職人の技が織りなす料理の数々をお楽しみください。
                    </p>
                    <div className="h-1 w-24 bg-red-600 mx-auto"></div>
                </section>

                {/* Three Column Layout */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-10 text-center">おすすめメニュー</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Column 1 */}
                        <div
                            className={`bg-white rounded-lg overflow-hidden shadow-md transition-all duration-1000 delay-400 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1595295333158-4742f28fbd85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
                                alt="特製ピザ"
                                className="w-full h-56 object-cover"
                            />

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">特製ピザ</h3>
                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    石窯で焼き上げる本格ピザ。日本の季節の食材を取り入れた独自のトッピングをお楽しみください。
                                </p>
                                <p className="text-red-600 font-bold">¥1,480〜</p>
                            </div>
                        </div>

                        {/* Column 2 */}
                        <div
                            className={`bg-white rounded-lg overflow-hidden shadow-md transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
                                alt="手打ちパスタ"
                                className="w-full h-56 object-cover"
                            />

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">手打ちパスタ</h3>
                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    毎日シェフが手作りする本格パスタ。和の食材とイタリアンソースの絶妙な組み合わせをご堪能ください。
                                </p>
                                <p className="text-red-600 font-bold">¥1,280〜</p>
                            </div>
                        </div>

                        {/* Column 3 */}
                        <div
                            className={`bg-white rounded-lg overflow-hidden shadow-md transition-all duration-1000 delay-600 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="ワインと日本酒"
                                className="w-full h-56 object-cover"
                            />

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">厳選ドリンク</h3>
                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    イタリアワインと日本酒を中心に、料理に合わせた豊富なドリンクメニューをご用意しています。
                                </p>
                                <p className="text-red-600 font-bold">¥580〜</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Restaurant Atmosphere */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-10 text-center">店内の雰囲気</h2>
                    <div
                        className={`bg-white rounded-lg p-8 shadow-md transition-all duration-1000 delay-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h3 className="text-2xl font-bold mb-4">くつろぎの空間</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    木の温もりと間接照明が織りなす落ち着いた空間で、気の合う仲間と楽しいひとときをお過ごしください。カウンター席ではシェフの調理風景を間近で見ることができます。
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center">
                                        <svg
                                            className="w-5 h-5 text-red-600 mr-2"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span>テーブル席：最大6名様</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="w-5 h-5 text-red-600 mr-2"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span>カウンター席：8席</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="w-5 h-5 text-red-600 mr-2"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span>個室：4〜12名様</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <img
                                    src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=685&q=80"
                                    alt="店内カウンター"
                                    className="rounded-lg h-40 w-full object-cover"
                                />

                                <img
                                    src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                                    alt="テーブル席"
                                    className="rounded-lg h-40 w-full object-cover"
                                />

                                <img
                                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                    alt="料理イメージ"
                                    className="rounded-lg h-40 w-full object-cover"
                                />

                                <img
                                    src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                                    alt="個室"
                                    className="rounded-lg h-40 w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section
                    className={`bg-red-700 text-white rounded-lg p-10 text-center transition-all duration-1000 delay-800 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                >
                    <h2 className="text-3xl font-bold mb-4">特別な夜をお過ごしください</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        ご予約・お問い合わせはお電話またはオンラインで承っております。
                        団体様向けの特別コースもご用意しています。
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-white text-red-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-full min-h-[44px] min-w-[44px] focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-all duration-300">
                            資料請求
                        </button>
                        <button className="bg-transparent hover:bg-red-800 border-2 border-white font-bold py-3 px-8 rounded-full min-h-[44px] min-w-[44px] focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-all duration-300">
                            ご予約はこちら
                        </button>
                    </div>
                </section>
            </main>

            {/* Information Section */}
            <section className="bg-gray-100 py-16">
                <div className="w-4/5 mx-auto">
                    <h2 className="text-3xl font-bold mb-10 text-center">店舗情報</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div
                            className={`bg-white rounded-lg p-8 shadow-md transition-all duration-1000 delay-900 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                        >
                            <h3 className="text-xl font-bold mb-4">営業時間・アクセス</h3>
                            <ul className="space-y-4 text-gray-700">
                                <li className="flex">
                                    <span className="font-bold w-24">営業時間</span>
                                    <span>17:00〜23:30（L.O. 22:30）</span>
                                </li>
                                <li className="flex">
                                    <span className="font-bold w-24">定休日</span>
                                    <span>月曜日（祝日の場合は翌日）</span>
                                </li>
                                <li className="flex">
                                    <span className="font-bold w-24">住所</span>
                                    <span>東京都渋谷区〇〇町1-2-3 〇〇ビル2F</span>
                                </li>
                                <li className="flex">
                                    <span className="font-bold w-24">アクセス</span>
                                    <span>渋谷駅から徒歩5分</span>
                                </li>
                                <li className="flex">
                                    <span className="font-bold w-24">電話番号</span>
                                    <span>03-1234-5678</span>
                                </li>
                            </ul>
                        </div>
                        <div
                            className={`bg-white rounded-lg overflow-hidden shadow-md h-80 transition-all duration-1000 delay-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                        >
                            {/* Map placeholder - in a real implementation, this would be an actual map */}
                            <div className="bg-gray-300 h-full w-full flex items-center justify-center">
                                <p className="text-gray-600">Google Mapが表示されます</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="py-16 bg-white">
                <div className="w-4/5 mx-auto max-w-2xl">
                    <h2 className="text-3xl font-bold mb-10 text-center">お問い合わせ</h2>
                    <form
                        className={`space-y-6 transition-all duration-1000 delay-1100 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                    >
                        <div>
                            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                                お名前 <span className="text-red-600">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 min-h-[44px]"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                                メールアドレス <span className="text-red-600">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 min-h-[44px]"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                                電話番号
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 min-h-[44px]"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="inquiry"
                                className="block text-gray-700 font-medium mb-2"
                            >
                                お問い合わせ内容 <span className="text-red-600">*</span>
                            </label>
                            <textarea
                                id="inquiry"
                                rows="5"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                required
                            ></textarea>
                        </div>
                        <div className="flex items-start">
                            <input
                                type="checkbox"
                                id="privacy"
                                className="mt-1 mr-2 min-h-[20px] min-w-[20px]"
                                required
                            />

                            <label htmlFor="privacy" className="text-gray-700">
                                <a href="#" className="text-red-600 hover:underline">
                                    プライバシーポリシー
                                </a>
                                に同意します
                            </label>
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full min-h-[44px] min-w-[44px] focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-all duration-300"
                            >
                                送信する
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-10">
                <div className="w-4/5 mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-6 md:mb-0">
                            <h2 className="text-2xl font-bold">TRATTORIA IZAKAYA</h2>
                            <p className="text-gray-400 mt-2">イタリアンと日本の融合</p>
                        </div>
                        <div className="flex space-x-6">
                            <a
                                href="#"
                                className="hover:text-red-400 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                            >
                                <span className="sr-only">Instagram</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="hover:text-red-400 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                            >
                                <span className="sr-only">Twitter</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="hover:text-red-400 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                            >
                                <span className="sr-only">Facebook</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
                        <p>© 2023 TRATTORIA IZAKAYA All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
