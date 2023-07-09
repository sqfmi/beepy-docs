import React from 'react';
import Layout from '@theme/Layout';

export default function Hello() {
  return (
    <Layout title="Gallery" description="Beepy Gallery">
        <section>
        <div className='container'>
        <iframe src="https://www.youtube.com/embed/sYbW3vFS_AE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
        <br/>
        <iframe src="https://www.youtube.com/embed/r9RmdUsp1jo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe loading="lazy" title="Beepy - gomuks demo" src="https://www.youtube.com/embed/fIgzybDcvYk?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>
        </div>
        </section>
    </Layout>
  );
}