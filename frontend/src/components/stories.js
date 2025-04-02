import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./stories.css";

const Stories = () => {
  // Example stories data
  const [stories] = useState([
    {
      id: 1,
      title: "My First Day at a New School",
      category: "real-life",
      content: "As an introvert, starting at a new school was terrifying. I remember standing at the entrance, my heart racing, not knowing where to go. But then I met Sarah, who noticed my discomfort and invited me to sit with her at lunch. That small act of kindness made all the difference. By the end of the day, I felt a little less alone in this new place.",
      author: "Alex",
      date: "2023-05-15"
    },
    {
      id: 2,
      title: "The Quiet Power of Introversion",
      category: "fiction",
      content: "In a world that never stops talking, I found strength in silence. My ability to observe, to listen, to think deeply became my superpower. While others rushed to speak, I took my time to form thoughtful responses. And in those moments of quiet reflection, I discovered insights that others missed.",
      author: "Jordan",
      date: "2023-06-22"
    },
    {
      id: 3,
      title: "Finding My Voice in a Loud Room",
      category: "real-life",
      content: "The conference room was filled with extroverts, each trying to outshine the others. I sat quietly, feeling overwhelmed by the noise. But when the discussion turned to a topic I was passionate about, I found the courage to speak. My voice was soft, but my words were clear. To my surprise, the room fell silent, and everyone listened. That day I learned that being introverted doesn't mean being silent forever.",
      author: "Taylor",
      date: "2023-07-10"
    },
    {
      id: 4,
      title: "The Introvert's Guide to Networking",
      category: "comedy",
      content: "Step 1: Arrive early to avoid the crowd. Step 2: Find a quiet corner with a plant. Step 3: Pretend to be deeply interested in your phone. Step 4: When someone approaches, use your pre-rehearsed conversation starters. Step 5: After 30 minutes, claim you have another appointment. Step 6: Go home and recharge for three days.",
      author: "Casey",
      date: "2023-08-05"
    },
    {
      id: 5,
      title: "The Power of Solitude",
      category: "fiction",
      content: "In a world of constant connection, I found peace in disconnection. My daily walks alone became my meditation, my time to process thoughts without interruption. It was in these moments of solitude that I found clarity, creativity, and a deeper understanding of myself.",
      author: "Riley",
      date: "2023-09-18"
    }
  ]);

  // State for category filter
  const [categoryFilter, setCategoryFilter] = useState("all");
  // State for search query
  const [searchQuery, setSearchQuery] = useState("");
  // State for search results
  const [searchResults, setSearchResults] = useState([]);
  // State to track if search is active
  const [isSearching, setIsSearching] = useState(false);

  // Handle search function
  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    const query = searchQuery.toLowerCase().trim();
    const results = stories.filter(story => 
      story.title.toLowerCase().includes(query) || 
      story.content.toLowerCase().includes(query) ||
      story.author.toLowerCase().includes(query) ||
      story.category.toLowerCase().includes(query)
    );
    
    setSearchResults(results);
    setIsSearching(true);
  };

  // Handle key press in search input
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // Clear search function
  const clearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
    setIsSearching(false);
  };

  // Filter stories based on selected category
  const filteredStories = categoryFilter === "all" 
    ? stories 
    : stories.filter(story => story.category === categoryFilter);

  // Determine which stories to display based on search or filter
  const displayStories = isSearching ? searchResults : filteredStories;

  return (
    <div className="stories-page">
      <div className="stories-header">
        <h1>Stories from Introverts</h1>
        <p>Read and connect with stories from fellow introverts</p>
        <Link to="/submitstory" className="submit-story-btn">Share Your Story</Link>
      </div>

      <div className="stories-filter">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search stories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            className="search-input"
          />
          <button onClick={handleSearch} className="search-button">
            <i className="search-icon">🔍</i>
          </button>
          {isSearching && (
            <button onClick={clearSearch} className="clear-search-button">
              Clear
            </button>
          )}
        </div>
        
        <div className="category-filter">
          <label>Filter by category:</label>
          <select 
            value={categoryFilter} 
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="real-life">Real Life</option>
            <option value="fiction">Fiction</option>
            <option value="horror">Horror</option>
            <option value="comedy">Comedy</option>
            <option value="science-fiction">Science Fiction</option>
            <option value="mystery">Mystery</option>
            <option value="fantasy">Fantasy</option>
            <option value="romance">Romance</option>
            <option value="adventure">Adventure</option>
          </select>
        </div>
      </div>

      {isSearching && searchResults.length === 0 ? (
        <div className="no-results">
          <p>No stories found matching "{searchQuery}". Try a different search term.</p>
        </div>
      ) : (
        <div className="stories-grid">
          {displayStories.map(story => (
            <div key={story.id} className="story-card">
              <div className="story-category">{story.category}</div>
              <h2 className="story-title">{story.title}</h2>
              <p className="story-excerpt">
                {story.content.length > 150 
                  ? `${story.content.substring(0, 150)}...` 
                  : story.content}
              </p>
              <div className="story-meta">
                <span className="story-author">By {story.author}</span>
                <span className="story-date">{story.date}</span>
              </div>
              <button className="read-more-btn">Read More</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Stories;
