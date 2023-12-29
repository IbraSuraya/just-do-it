// ada 6 bagian component secara terurut
// - News (1) : Component yang bertanggung jawab sebagai parent untuk menampung seluruh UI yang ditampilkan.
// - Header (2) : Component yang bertanggung jawab sebagai UI header dari News.
// - Card (3) : Component yang bertanggung jawab sebagai parent untuk menampung card (item) dari berita. Component ini nantinya akan digunakan kembali untuk menampilkan item berita dengan data yang berbeda.
// - CardHeader (4) : Component yang bertanggung jawab menampilkan bagian header dari item berita.
// - CardBody (5) : Component yang bertanggung jawab menampilkan bagian body dari item berita.
// - Button (6) : Component yang bertanggung jawab untuk menampilkan tautan ke berita (dumi).

import React from 'react';
import { createRoot } from 'react-dom/client';

function Button({ link }) {
  return <a href={link}>Find out more</a>;
}

function CardHeader({ image, category, title }) {
  return (
    <header>
      <h4>{category}</h4>
      <img src={image} alt={title} />
    </header>
  );
}

function CardBody({ date, title, content, link }) {
  return (
    <div>
      <p>{date}</p>
      <h2>{title}</h2>
      <p>{content}</p>
      <Button link={link} />
    </div>
  );
}

function Card({ image, category, date, title, content, link }) {
  return (
    <article>
      <CardHeader image={image} category={category} title={title} />
      <CardBody date={date} title={title} content={content} link={link} />
    </article>
  );
}

function Header({ title, subtitle }) {
  return (
    <header>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </header>
  );
}

function News() {
  // data news
  const someNews = [
    {
      title: 'CNN Acuire BEME',
      date: 'March 20 2022',
      content: "CNN purchased Casey Neistat's Beme app for $25million.",
      image: 'https://source.unsplash.com/user/erondu/600x400',
      category: 'News',
      link: '#'
    },
    {
      title: 'React and the WP-API',
      date: 'March 19 2022',
      content: 'The first ever decoupled starter theme for React & the WP-API.',
      image: 'https://source.unsplash.com/user/ilyapavlov/600x400',
      category: 'News',
      link: '#'
    },
    {
      title: 'Nomad Lifestyle',
      date: 'March 19 2022',
      content: 'Learn our tips and tricks on living a nomadic lifestyle.',
      image: 'https://source.unsplash.com/user/erondu/600x400',
      category: 'Travel',
      link: '#'
    }
  ];

  // TODO: selesaikan component-nya
  return (
    <div>
      <Header title="Latest News" subtitle="Covering March & April 2022" />
      {/* <Card
        title={someNews[0].title}
        date={someNews[0].date}
        content={someNews[0].content}
        image={someNews[0].image}
        category={someNews[0].category}
        link={someNews[0].link}
      />
      <Card
        title={someNews[1].title}
        date={someNews[1].date}
        content={someNews[1].content}
        image={someNews[1].image}
        category={someNews[1].category}
        link={someNews[1].link}
      />
      <Card
        title={someNews[2].title}
        date={someNews[2].date}
        content={someNews[2].content}
        image={someNews[2].image}
        category={someNews[2].category}
        link={someNews[2].link}
      /> */}

      {/* Lebih singkat */}
      <Card {...someNews[0]} />
      <Card {...someNews[1]} />
      <Card {...someNews[2]} />
    </div>
  );
}

// Dibikin one line
createRoot(document.getElementById('root')).render(<News />);
