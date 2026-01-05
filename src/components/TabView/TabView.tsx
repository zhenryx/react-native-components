import React, { useState, useEffect, ReactNode } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';

export interface Tab {
  id: string;
  label: string;
  content?: ReactNode;
}

export interface TabViewProps {
  tabs: Tab[];
  defaultTab?: string;
  onTabChange?: (tabId: string) => void;
  renderContent?: (tab: Tab) => ReactNode;
}

export const TabView: React.FC<TabViewProps> = ({
  tabs,
  defaultTab,
  onTabChange,
  renderContent,
}) => {
  const [activeTab, setActiveTab] = useState<string>(
    defaultTab || tabs[0]?.id || ''
  );

  // 当 defaultTab 或 tabs 变化时，更新 activeTab
  useEffect(() => {
    if (defaultTab && tabs.some((tab) => tab.id === defaultTab)) {
      setActiveTab(defaultTab);
    } else if (tabs.length > 0) {
      setActiveTab((currentTab) => {
        // 如果当前 tab 不在 tabs 中，回退到第一个 tab
        if (!tabs.some((tab) => tab.id === currentTab)) {
          return tabs[0].id;
        }
        return currentTab;
      });
    }
  }, [defaultTab, tabs]);

  const handleTabPress = (tabId: string) => {
    setActiveTab(tabId);
    onTabChange?.(tabId);
  };

  const activeTabData = tabs.find((tab) => tab.id === activeTab) || tabs[0];

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {tabs.map((tab) => (
            <Pressable
              key={tab.id}
              style={styles.tab}
              onPress={() => handleTabPress(tab.id)}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === tab.id && styles.tabTextActive,
                ]}
              >
                {tab.label}
              </Text>
              {activeTab === tab.id && <View style={styles.tabIndicator} />}
            </Pressable>
          ))}
        </ScrollView>
      </View>

      <View style={styles.contentContainer}>
        {activeTabData
          ? renderContent
            ? renderContent(activeTabData)
            : activeTabData.content || null
          : null}
      </View>
    </View>
  );
};

TabView.displayName = 'TabView';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  tabContainer: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#E5E7EB',
    backgroundColor: '#FFFFFF',
  },
  tab: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    position: 'relative',
    minWidth: 70,
  },
  tabText: {
    fontSize: 15,
    color: '#9CA3AF',
    fontWeight: '500',
    textAlign: 'center',
  },
  tabTextActive: {
    color: '#111827',
    fontWeight: '700',
    fontSize: 16,
    transform: [{ scale: 1.1 }],
  },
  tabIndicator: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    width: 25,
    height: 3,
    backgroundColor: '#EF4444',
    borderRadius: 2,
  },
  contentContainer: {
    flex: 1,
    padding: 20,
  },
});

