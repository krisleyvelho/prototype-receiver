import * as React from 'react';
import { ChevronRight } from 'lucide-react';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar';

type ItemTreeType = {
  title: string;
  url: string;
  items?: ItemTreeType[];
  isActive?: boolean;
};

const data: { navMain: ItemTreeType[] } = {
  navMain: [
    {
      title: 'Condomínios',
      url: '/auth/admin/condominios',
      items: [],
    },
    {
      title: 'Building Your Application',
      url: '#',
      /* items: [
        {
          title: 'Routing',
          url: '#',
        },
        {
          title: 'Data Fetching',
          url: '#',
          isActive: true,
        },
        {
          title: 'Rendering',
          url: '#',
        },
      ], */
    },
  ],
};

const NextedSidebarItem = ({ item }: { item: ItemTreeType }) => {
  if (item?.items?.length > 0) {
    return (
      <Collapsible
        key={item.title}
        title={item.title}
        defaultOpen
        className="group/collapsible"
      >
        <SidebarGroup>
          <SidebarGroupLabel
            asChild
            className="group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          >
            <CollapsibleTrigger>
              {item.title}{' '}
              <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
            </CollapsibleTrigger>
          </SidebarGroupLabel>
          <CollapsibleContent>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <NextedSidebarItem item={item} />
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </CollapsibleContent>
        </SidebarGroup>
      </Collapsible>
    );
  }
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton asChild isActive={item.isActive}>
          <a href={item.url}>{item.title}</a>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props} collapsible='offcanvas'>
      <SidebarHeader>
        {/* <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        /> */}
        {/* <SearchForm /> */}
      </SidebarHeader>
      <SidebarContent className="gap-0">
        {data.navMain.map((item, i) => (
          <NextedSidebarItem item={item} key={i} />
        ))}
        
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
