import React from "react";
import "./banking.css";
const BankingInNepal = () => {
  return (
    <div className="banking-info-container">
      <h1 className="title">Banking in Nepal</h1>
      <img src="/banks-in-nepal-2.jpg" alt="Banks in Nepal" className="responsive-image" loading="lazy" style={{height:"50vh", display:'block', justifySelf:"center" }}/>
      <p className="intro">
        Nepal's banking sector is categorized into several types, each serving
        different financial needs and regulatory purposes. The classification is
        overseen by the Nepal Rastra Bank (NRB), the central regulatory authority.
        Below is an overview of the various types of banks operating in Nepal:
      </p>

      <h2>1. Commercial Banks (Class A)</h2>
      <p>
        These banks are the backbone of Nepal's banking system, providing a wide
        range of financial services such as deposits, loans, trade financing, and
        international banking. There are 20 commercial banks operating nationwide,
        including institutions like:
      </p>
      <ul>
        <li><strong>Nabil Bank</strong></li>
        <li><strong>Standard Chartered Bank Nepal</strong></li>
        <li><strong>Nepal Bank Limited</strong></li>
      </ul>
      <p>
        These banks have extensive branch networks and cater to individual,
        corporate, and governmental needs.
      </p>

      <h2>2. Development Banks (Class B)</h2>
      <p>
        Development banks focus on supporting specific economic sectors, such as
        agriculture, infrastructure, and small enterprises. They play a crucial role
        in regional development. There are 17 development banks, including:
      </p>
      <ul>
        <li><strong>Muktinath Bikas Bank</strong></li>
        <li><strong>Garima Bikas Bank</strong></li>
      </ul>
      <p>
        These banks operate regionally and nationally, providing specialized credit
        services.
      </p>
      <img src="/banks-in-nepal-1.jpg" alt="Banks in Nepal" className="responsive-image" loading="lazy" style={{height:"50vh", display:'block', justifySelf:"center" }}/>
      <h2>3. Finance Companies (Class C)</h2>
      <p>
        Finance companies are smaller financial institutions that offer services like
        fixed deposits, hire-purchase loans, and personal loans. There are currently
        17 such companies in Nepal, including:
      </p>
      <ul>
        <li><strong>ICFC Finance</strong></li>
        <li><strong>Pokhara Finance</strong></li>
      </ul>
      <p>These companies have limited operational scope compared to other banks.</p>

      <h2>4. Microfinance Institutions (Class D)</h2>
      <p>
        Microfinance institutions support low-income individuals and small businesses
        by providing microloans and other financial services. These institutions play
        a vital role in rural development and poverty alleviation. Nepal hosts around
        90 microfinance institutions, such as:
      </p>
      <ul>
        <li><strong>Nirdhan Utthan Laghubitta</strong></li>
        <li><strong>Chhimek Laghubitta</strong></li>
      </ul>

      <h2>5. Cooperative Banks</h2>
      <p>
        Cooperative banks and savings cooperatives provide localized financial
        services. They are community-focused and often work in rural areas. Although
        not formally categorized under NRB, they play an important role in financial
        inclusion.
      </p>

      <h2>6. Infrastructure Development Banks</h2>
      <p>
        Some banks specialize in funding large-scale infrastructure projects,
        contributing to Nepal's economic growth. These institutions are part of the
        development banking category but focus specifically on long-term financing.
      </p>

      <h2>Importance of the Banking Sector</h2>
      <p>
        Nepal's banking sector is crucial for economic development, financial
        inclusion, and poverty reduction. With advancements in digital banking, banks
        are now offering more accessible and user-friendly services, helping bridge
        the financial divide in the country.
      </p>

      <p>
        For more detailed information about the banks and their roles, you can
        explore resources such as Nepal Rastra Bank's official publications or
        banking directories.
      </p>
    </div>
  );
};

export default BankingInNepal;