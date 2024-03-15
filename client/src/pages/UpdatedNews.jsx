import React, { useEffect, useState } from 'react';
// import moment from 'moment/moment';
import { getNews } from '../../getNews';
import NewsCardPost from '../components/NewsCard';

export default function UpdatedNews() {

  const [newsData, setNewsData] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  const fetchNewsData = async (category) => {
    const data = await getNews(category);
    setNewsData(data?.data?.articles.slice(0, 9));
  };


  useEffect(() => {
    fetchNewsData(selectedOption || 'general');
  }, [selectedOption]);

  // useEffect(() => {
  //   console.log(newsData);
  // }, [newsData]);



  const selectCategory = (event) => {
    setSelectedOption(event.target.value);
  };





  return (
    <div className=" flex items-center content-center flex-col p-10">
      <h1>Updated News</h1>
      <p
        style={{
          fontWeight: 600,
          fontSize: 19,
          opacity: 1,
          letterSpacing: 0.5,
        }}
      >
        Please Select below Category
      </p>
      <div className="flex items-center gap-2 text-black dark:text-white mt-4">
        <label htmlFor="category">Choose a category :</label>
        <select name="category" id="category" onChange={selectCategory} value={selectedOption} className=' text-black'>
          <option value="uncatergorizrd">Select A Category</option>
          <option value="javascript">javascript</option>
          <option value="MERN">MERN</option>
          <option value="Nodejs">Nodejs</option>
          <option value="MongoDb">MongoDb</option>
          <option value="Express">Express</option>
          <option value="React">React</option>
        </select>

      </div>




      <div className=' flex items-center content-center flex-col p-10'>
        {newsData && newsData.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
            <div className='flex flex-wrap gap-4'>
              {newsData.map((news) => (
                <NewsCardPost key={news.id} news={news} />
              ))}
            </div>

          </div>
        )}
      </div>


      {/* {newsData.map((item) => (
          <div className="display-news" key={item.title}>
            <img
              src={
                item?.urlToImage ||
                'https://ma-hub.imgix.net/wp-images/2019/05/28232454/news-intro-template.jpg'
              }
              alt="news-image"
              className="news-img"
            />
            <p className="news-title">{item.title}</p>
            <p className="news-content">{item?.content}</p>
            <div className="warap">
              <p className="news-author">
                Author : {item?.author || <i>Author Unavailable</i>}
              </p>
              <p className="news-date">
                Date : {moment(item?.publishedAt).format('LLLL')}
              </p>
            </div>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              Read More.
            </a>
          </div>
        ))} */}
    </div>

  )
}
