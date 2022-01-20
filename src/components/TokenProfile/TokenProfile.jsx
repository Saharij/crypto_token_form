import './TokenProfile.scss';

export const TokenProfile = ({ token }) => {
  return (
    <>
      <h2 className="token-title">
        Token
      </h2>
      <table className="table">
        <thead className="thead">
          <tr className="tr">
            <td className="td">
              Company name
            </td>
            <td className="td">
              Token name
            </td>
            <td className="td">
              Token symbol
            </td>
            <td className="td">
              Maximum token supply
            </td>
            <td className="td">
              Blockchain
            </td>
            <td className="td">
              Supply
            </td>
          </tr>
        </thead>
        <tbody className="tbody">
          <tr className="tr">
            <td className="td">
              {token.company}
            </td>
            <td className="td">
              {token.name}
            </td>
            <td className="td">
              {token.symbol}
            </td>
            <td className="td">
              {token.maxTokenSupply}
            </td>
            <td className="td">
              {token.blockchain}
            </td>
            <td className="td">
              {token.supply ? "Yes" : "No"}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
