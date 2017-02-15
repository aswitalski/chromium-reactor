{
  const NavigationPanel = class extends Reactor.Component {

    render() {
      return [
        'div', [
          'span', 'Navigation Panel'
        ], ...this.props.items.map((item, index) => [
          NavigationItem, {
           onClick: () => this.props.onItemClicked(index),
           text: item.label,
           highlighted: item.highlighted
          }
        ])
      ];    
    }
  };

  const NavigationItem = require.def('demo/components/navigation/item');

  module.exports = NavigationPanel;
}
