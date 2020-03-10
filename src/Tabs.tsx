import * as React from 'react';

interface ITabsContext {
  activeName?: string;
  handleTabClick?: (name: string) => void;
}

const TabsContext = React.createContext<ITabsContext>({});

interface IState {
  activeName: string;
}

interface ITabProps {
  name: string;
  initialActive?: boolean;
}

class Tabs extends React.Component<{}, IState> {
  public static Tab: React.SFC<ITabProps> = props => <li> {props.children}</li>;

  private handleTabClick = (name: string) => {
    this.setState({ activeName: name });
  };

  public render() {
    return (
      <TabsContext.Provider
        value={{
          activeName: this.state ? this.state.activeName : '',
          handleTabClick: this.handleTabClick
        }}
      >
        <ul className='tabs'>{this.props.children}</ul>;
      </TabsContext.Provider>
    );
  }
}

export default Tabs;
